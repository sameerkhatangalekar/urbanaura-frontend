
export interface ProductProps {
    _id: string;
    title: string;
    description: string;
    images: string[];
    categories: string[];
    price: number;
    createdAt: Date;
    updatedAt: Date;
    sizes: string[];
    colors: string[];
}
export interface CategoryProps {
    _id:       string;
    name:      string;
    image:     string;
    createdAt: Date;
    updatedAt: Date;
}

export type ErrorObj = {
    status: number;
    message : string;
    timestamp : string;
}
