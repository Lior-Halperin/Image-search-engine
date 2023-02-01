
import config from "./config";
import axios from "axios";
import { IApiServerParamsModel } from "../4-models/api-server-models/api-params-model";
import { apiRequestConstructor } from "./api-request-constructor";

async function execute(params: IApiServerParamsModel): Promise<any> {

    const apiRequest: string = apiRequestConstructor(params)

    const response = await axios.get(config.connectionString + apiRequest);

    return response.data
}

export default {
    execute
}
