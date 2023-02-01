import express, { NextFunction, Request, Response } from "express";
import logic from "../5-logic/categories-list-logic";
import verifyLoggedIn from "../3-middleware/verify-logged-in";

const router = express.Router();


// GET http://localhost:3001/api/images/categories-list
router.get("/images/categories-list",verifyLoggedIn, async (request: Request, response: Response, next: NextFunction) => {
    try {              
        const result = logic.getCategoriesList()
        response.json(result);

    }
    catch (err: any) {
        next(err);
    }
});
export default router;

