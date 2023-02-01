import OrderParams from "./OrderParamsEnum";

export interface IImageModel {
    id: number,
    webformatURL: string,
    views: number,
    downloads: number,
    collections: number,
    likes: number,
    comments: number,
    category: string;
    page: number;
    per_page: number | 20;
    order: OrderParams | 'popular';
}

