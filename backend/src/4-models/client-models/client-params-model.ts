import imageCategories from "../image-categories-enum";
import OrderParams from "../order-params-enum";
  
export interface IClientParamsModel  {
     category: imageCategories;
     page?: number;
     per_page?: number;
     order?: OrderParams;
}



