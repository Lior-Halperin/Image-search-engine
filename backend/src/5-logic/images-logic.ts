import dal from "../2-utils/dal"
import { clientValidateParamsData } from "../2-utils/validations";
import { IApiServerParamsModel } from "../4-models/api-server-models/api-params-model";
import { ValidationError } from "../4-models/error-models";
import { IImageModel } from "../4-models/image-model";

// Get images items by params = {key,category,per_page,page,order}
async function getImagesItemsByParams(params:IApiServerParamsModel): Promise<any> {
  
    if(!params.per_page) params.per_page = 9 //If no per_page is set then the default is 9.

    const valid = clientValidateParamsData(params)
        if (valid.error) {
            throw new ValidationError(valid.error.message)
        }
        const result = await dal.execute(params);

        const imagesCollection:IImageModel[] = []

        // Create a image model collection:
        result.hits.forEach((element:IImageModel) => {
            let imageItem:IImageModel = {
                id: element.id,
                webformatURL: element.webformatURL,
                category: params.category,
                collections: element.collections,
                comments: element.comments,
                downloads: element.downloads,
                likes: element.likes,
                order: params.order,
                page: params.page,
                per_page: params.per_page,
                views: element.views,
            }
            imagesCollection.push(imageItem)
        });
        

        return imagesCollection
}

export default {
    getImagesItemsByParams
}