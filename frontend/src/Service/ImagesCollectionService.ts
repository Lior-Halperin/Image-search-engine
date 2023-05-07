import axios from "axios";
import { IImageModel } from "../Models/ImageModel";
import OrderParams from "../Models/OrderParamsEnum";
import { IParamsModel } from "../Models/ParamsModel";
import { fetchImagesCollectionAction } from "../Redux/ImagesCollectionState";
import store from "../Redux/Store";
import  config  from "../Utils/Config";

class ImagesService {

  // Get all images according to the params:
  public async getImagesCollection(paramsRequest:IParamsModel): Promise<IImageModel[]> {
    try {
        
        // Step-1: get from redux library the data of the images collection..
        // The data structure in redux: {nature : {1 => [{},{}...] ,2=>[{},{}...]], sports : {1 => [{},{}...],2=>[{},{}...]}}
      let imagesCollection:any = store.getState().imagesCollectionState.imagesCollection; 

      const toMap = new Map() 
      toMap.clear()

      const categoryName:string = paramsRequest.category

      const isCategory = imagesCollection.hasOwnProperty(categoryName) //  complexity O(1)
      const isPage = isCategory && imagesCollection[categoryName].get(paramsRequest.page) // complexity O(1)
     let response:IImageModel[];

     
     // Step-3: If no data is accessed get it from the server
     // 3.1: If there is no data at all on the requested category in redux:
      if ( !isCategory ) { 
        // 3.1.1: Get data from the server
        const serverResponse = await axios.get<IImageModel[]>(config.imagesURL+paramsRequest.category+'/'+paramsRequest.page,{params:paramsRequest}); // delete ->,{params:paramsRequest}
        response = serverResponse.data
        // 3.1.2: Create a Map function with a [key = page,value = [{images model},{}...]]
         toMap.set(paramsRequest.page,response)

         imagesCollection[categoryName] = toMap
        }
      else {
         // 3.2: If the category exists in redux but the requested page does not exist:
        if(!isPage){
        // 3.2.1: Get data from the server
         const serverResponse = await axios.get<IImageModel[]>(config.baseURL+'images/'+paramsRequest.category+'/'+paramsRequest.page,{params:paramsRequest});
         response = serverResponse.data
         // 3.2.2: Create a Map function with a [key = page,value = [{images model},{}...]].
         toMap.set(paramsRequest.page,response)
         // 3.2.3: Set the Map function you created to the requested category.
         imagesCollection[categoryName].set(paramsRequest.page,response) // complexity O(1)
        }
      }
      if(isPage){
        response = isPage
      }

        store.dispatch(fetchImagesCollectionAction(imagesCollection)); // Add to Redux.


      return response

    } 
    catch (err: any) {
        alert(err)
      console.log('err',err);
    }
  }
}

const imagesService = new ImagesService();

export default imagesService;
