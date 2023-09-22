export interface ProductDetails {
    _id:string;
    title:string;
    description:string;
    imageCover:string;
    images:[];
    category:{
        name:string;
    }
}
