import cyber from "../2-utils/cyber";
import { clientValidateCredentialData } from "../2-utils/validations";
import { IClientCredentialModel } from "../4-models/client-models/client-credentials-model";
import { UnauthorizedError } from "../4-models/error-models";



async function login(credentials: IClientCredentialModel): Promise<string> {
    // 1. Joi Validation
    const valid = clientValidateCredentialData(credentials)
    if (valid.error) {
        throw new UnauthorizedError(valid.error.message)
    }
    // 2.  Hash password before comparing to DB:

    // 3. Get the user by username and password from DB:

    // 4. Compares the user details from the DB with the login credentials: 

    // 5. Delete password before get new token:

    // 6. Generate token from the user details that include the key to the external API.
    const token = cyber.getNewToken({key:"25540812-faf2b76d586c1787d2dd02736"})

    // 7. Returning the token to the user
    return token;
};


export default {
    login
}