import { IImageCategoriesModel } from "../4-models/client-models/client-image-categories-model";
import imageCategories from "../4-models/image-categories-enum";

 const getCategoriesList = ()=> {

    // Constructs a collection of image categories model from enum categories list.
    const categoriesList:IImageCategoriesModel[] =
     Object.keys(imageCategories).map((key)=>({
        id: Object.keys(imageCategories).indexOf(key)+1,
        name: key
     }));

    return categoriesList
}

export default {
    getCategoriesList
}