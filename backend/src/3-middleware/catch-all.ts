import { NextFunction, Request, Response } from "express";

async function catchAll(err: any, request: Request, response: Response, next: NextFunction) {

    console.log("--------catchAll----------")

    let status:number;
    let message:string;
    switch (true) {
        // Catching an error from errors model
        case err.status > 0:
            status = err.status
            message = err.message
            break;
            // Catching an error from the external server
        case err.response.status > 0:
            status = err.response.status
            message = err.response.data
            break;
        default:
            status = 500
            message = "Unknown Error"
    }

    console.log(status, message)
    response.status(status).send(message);
}

export default catchAll;