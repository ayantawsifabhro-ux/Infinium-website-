
export enum Category {
  PERFUMES = 'Perfumes',
  WATCHES = 'Watches',
  ACCESSORIES = 'Accessories'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  imageUrl: string;
  tagline: string;
  rating: number;
  reviewCount: number;
}

export interface CartItem extends Product {
  quantity: number;
}
