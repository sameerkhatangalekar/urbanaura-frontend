
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