import { NextFunction, Request, Response } from "express";
import cyber from "../2-utils/cyber";

 function clientRequestConstructor(request: Request, response: Response, next: NextFunction) {
    try{
        const apiServerKey:string = cyber.getApiServerKey(request);
        const mergeParamsObj = Object.assign(request.query, request.params)
        mergeParamsObj.key = apiServerKey
        request.body = mergeParamsObj
        next();
    }
    catch(err: any){
        next(err)
    }

};

export default clientRequestConstructor;