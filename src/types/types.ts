export interface IData {
    reviews:number;
    parkinglot:boolean;
    phone:`${number}`;
    image:string;
    restauranttype:string;
    businessname:string;
    address:string;
    slug:string;
    email:string;
    id:string;
    reviewsList: IReview[];
}

export interface IRestarauntCard {
    card:IData;
    handleToggleFavorite?: (id: string) => void;
}
export interface IReview {
    id:string | undefined;
    author:string;
    comment:string;
    stars:number;
}

