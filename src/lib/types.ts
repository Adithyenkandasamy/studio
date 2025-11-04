import type {placeholderImages} from './placeholder-images.json';

export type Product = {
  id: string;
  name: string;
  category: 'Girls' | 'Boys' | 'Accessories';
  price: number;
  description: string;
  imageUrl: (typeof placeholderImages)[number]['imageUrl'];
  imageHint: string;
  sizes: string[];
  isFeatured?: boolean;
  gallery?: {
    id: (typeof placeholderImages)[number]['id'];
    url: (typeof placeholderImages)[number]['imageUrl'];
    hint: string;
  }[];
};

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  location: string;
  avatarUrl: (typeof placeholderImages)[number]['imageUrl'];
  avatarHint: string;
};

export type Category = {
  id: string;
  name: string;
  href: string;
  imageUrl: (typeof placeholderImages)[number]['imageUrl'];
  imageHint: string;
};

export type CartItem = {
  product: Product;
  size: string;
  quantity: number;
};

export type Order = {
  id: string;
  customerName: string;
  address: string;
  contact: string;
  items: {
    productId: string;
    quantity: number;
    price: number;
    size: string;
  }[];
  totalPrice: number;
  status: 'Pending' | 'Shipped' | 'Delivered';
  createdAt: Date;
};
