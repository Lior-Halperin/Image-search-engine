import { IApiServerParamsModel } from "../4-models/api-server-models/api-params-model";

export const apiRequestConstructor = (params: IApiServerParamsModel) => {

    let apiRequest:string = ''
    const arrayOfParams = Object.entries(params);

    if (arrayOfParams.length > 2) {
        apiRequest = params.key + '&q=' + params.category
        for (const [key, value] of arrayOfParams) {
            if (key !== 'key' && key !== 'category') apiRequest = apiRequest + `&${key}=${value}`;
        }
    }
    else {
        apiRequest = params.key + '&q=' + params.category
    }
    return apiRequest
}