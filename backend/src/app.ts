
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import config from "./2-utils/config";
import catchAll from "./3-middleware/catch-all";
import expressFileUpload from "express-fileupload";
import { RouteNotFoundError } from "./4-models/error-models";
import authController from "./6-controllers/auth-controller";
import CategoriesController from'./6-controllers/categories-controller';
import ImagesController from './6-controllers/images-controller';

// Create server:
const expressServer = express();

//  Backend approval to browse AJAX to backend API
if (config.isDevelopment) expressServer.use(cors());

// Tell express to extract json object from request body into request.body variable:
expressServer.use(express.json());

// Transfer request to the controllers:
expressServer.use("/api",authController);

expressServer.use("/api", ImagesController);

expressServer.use("/api", CategoriesController);

// Insert received files into request.files object:
expressServer.use(expressFileUpload())

//Route not found
expressServer.use("*", (request: Request, response: Response, next: NextFunction) => {
    next(new RouteNotFoundError(request.method, request.originalUrl));
});

expressServer.use(catchAll);

expressServer.listen(config.port, () => {
    console.log(`Listening on http://localhost:${config.port}`);});


