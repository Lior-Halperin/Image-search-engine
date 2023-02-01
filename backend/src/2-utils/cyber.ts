import { Request } from "express";
import jwt from "jsonwebtoken"
import jwtDecode from "jwt-decode"
import { UnauthorizedError } from "../4-models/error-models";

// create a password that is embedded within the token to prevent content hackers from hacking into the system.
const secret = "ABigMiracleHappenedHere";

function getNewToken(user: any): string {

    //Object to stash inside the token:
    const payload = { user };

    // Generate new token:
    const token = jwt.sign(payload, secret, { expiresIn: "10h" });

    // Return token
    return token;
};


function verifyToken(request: Request): Promise<boolean> {

    return new Promise<boolean>((resolve, reject) => {

        // Extract token header (autorization: Bearer token):
        const header = request.headers.authorization;
        // If no such header sent:
        if (!header) {
            reject(new UnauthorizedError("No token sent"));
        };

        //Extract the token:
        // Bearer the-token
        //        ^
        // 01234567

        const token = header.substring(7);

        // If no token sent:
        if (!token) {
            reject(new UnauthorizedError("No token sent"));
        };
        // If we have some token:
        jwt.verify(token, secret, (err, payload) => {
            if (err) {
                reject(new UnauthorizedError("Invalid or expired"));
                return;
            }

            resolve(true);
        });

    });
};

function getApiServerKey(request: Request) {
    try{
        const header = request.headers.authorization;
        const token = header.substring(7);
        const key = (jwtDecode(token) as any).user.key
        return key
    }
catch(err:any){
    throw(err)
}
}

export default {
    getNewToken,
    verifyToken,
    getApiServerKey
}