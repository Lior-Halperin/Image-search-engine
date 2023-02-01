import express, { NextFunction, Request, Response } from "express";
import clientRequestConstructor from "../3-middleware/client-request-constructor";
import verifyLoggedIn from "../3-middleware/verify-logged-in";
import { IApiServerParamsModel } from "../4-models/api-server-models/api-params-model";
import OrderParams from "../4-models/order-params-enum";
import logic from "../5-logic/images-logic";

const router = express.Router();

// GET http://localhost:3001/api/images/sports/1?per_page=8
router.get("/images/:category/:page",verifyLoggedIn,clientRequestConstructor, async (request: Request, response: Response, next: NextFunction) => {
    try {
        const params:IApiServerParamsModel = request.body
        const result = await logic.getImagesItemsByParams(params)

        response.json(result);

    }
    catch (err: any) {
        next(err);
    }
});

export default router;
