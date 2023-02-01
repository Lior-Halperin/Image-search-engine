import OrderParams from "./OrderParamsEnum";

export interface IParamsModel  {
     category: string;
     page: number;
     per_page?: number ;
     order?: OrderParams;
}



