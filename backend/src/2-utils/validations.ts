import Joi from "joi";
import { IApiServerParamsModel } from "../4-models/api-server-models/api-params-model";
import { IClientCredentialModel } from "../4-models/client-models/client-credentials-model";
import imageCategories from "../4-models/image-categories-enum";
import OrderParams from "../4-models/order-params-enum";


    // Client request validation:
    export const clientValidateCredentialData = (credential:IClientCredentialModel) => {
        const  clientCredentialSchema = Joi.object <IClientCredentialModel>({
            userName: Joi.string().required(),
            password: Joi.string().optional(),
        });
        return clientCredentialSchema.validate(credential)
    }
    export const clientValidateParamsData = (params:IApiServerParamsModel) => {

        const  clientParamsSchema = Joi.object <IApiServerParamsModel>({

            category: Joi.string().valid(...Object.values(imageCategories)),
            page: Joi.number().optional().integer().min(1),
            per_page: Joi.number().optional().integer().min(3).max(200),
            order: Joi.valid(`${OrderParams.latest}` , `${OrderParams.popular}`).optional(),
            key: Joi.string().required(),
        });
        
        return clientParamsSchema.validate(params)
    }


    


