import axios from "axios";
import { IImageCategoriesModel } from "../Models/ImageCategoriesModel";
import { fetchCategoriesAction } from "../Redux/ImageCategoriesState";
import store from "../Redux/Store";
import  config  from "../Utils/Config";

class ImagesCategoriesService {

  // Get all image categories:
  public async getImageCategoriesList(): Promise<IImageCategoriesModel[]> {
    try {
      let categories:IImageCategoriesModel[] = store.getState().categoriesState.categories; // get from redux library the data held by it.
      if (categories.length === 0) {
        // If no data is accessed get it from the server
        const response = await axios.get<IImageCategoriesModel[]>(config.imagesCategories);
        
        categories = response.data;

        store.dispatch(fetchCategoriesAction(categories)); // Add categories list to Redux.
      }

      return categories;
    } 
    catch (err: any) {
      console.log(err);
    }
  }
}

const imagesCategoriesService = new ImagesCategoriesService();

export default imagesCategoriesService;
