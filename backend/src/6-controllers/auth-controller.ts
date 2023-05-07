
import express, { NextFunction, Request, Response } from "express";
import { IClientCredentialModel } from "../4-models/client-models/client-credentials-model";
import logic from "../5-logic/auth-logic";

const router = express.Router();


// POST http://localhost:3001/api/auth/login
router.post("/auth/login", async (request: Request, response: Response, next: NextFunction) => {
    try{
        console.log('fff')
        //  Create credentials object
        const credentials: IClientCredentialModel = (request.body);

        // Login
        const token = await logic.login(credentials);
        // Return token 
        response.status(200).json(token)
    }
    catch(err: any){
        next(err)
    }
});

// Export all routes from this controller. 
export default router;