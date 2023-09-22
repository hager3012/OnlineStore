export interface Products {
    _id:string;
    imageCover:string;
    title:string;
    images:[];
    category:{
        name:string;
        _id:string;
    };
    price:number;
    ratingsAverage:number;
}
