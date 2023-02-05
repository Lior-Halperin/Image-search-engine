import imageCategories from "./image-categories-enum";
import OrderParams from "./order-params-enum";

export interface IImageModel {
    id: number,
    webformatURL: string,
    views: number,
    downloads: number,
    collections: number,
    likes: number,
    comments: number,
    category: imageCategories;
    page: number;
    per_page: number ;
    order: OrderParams ;
}

