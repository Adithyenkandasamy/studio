import type { Product, Category, Testimonial } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White Formal Shirt',
    category: 'Boys',
    price: 1299,
    description: 'Experience unparalleled comfort and style with our premium cotton formal shirt. A timeless piece for any gentleman\'s wardrobe, perfect for business meetings or formal events.',
    imageUrl: 'https://picsum.photos/seed/10/800/1000',
    imageHint: 'white shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    isFeatured: true,
    gallery: [
      { id: 'product-shirt-1', url: 'https://picsum.photos/seed/10/800/1000', hint: 'white shirt' },
      { id: 'product-shirt-gallery-1', url: 'https://picsum.photos/seed/20/1000/1200', hint: 'fabric texture' },
      { id: 'product-shirt-gallery-2', url: 'https://picsum.photos/seed/21/1000/1200', hint: 'man wearing' },
      { id: 'product-shirt-gallery-3', url: 'https://picsum.photos/seed/22/1000/1200', hint: 'shirt collar' }
    ]
  },
  {
    id: '2',
    name: 'Elegant Black Blazer Dress',
    category: 'Girls',
    price: 3499,
    description: 'Make a statement with this powerful and elegant black blazer dress. Tailored to perfection, it combines modern sophistication with classic formal wear.',
    imageUrl: 'https://picsum.photos/seed/14/800/1000',
    imageHint: 'blazer dress',
    sizes: ['XS', 'S', 'M', 'L'],
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Gold Chronograph Watch',
    category: 'Accessories',
    price: 8999,
    description: 'A symbol of luxury and precision. This gold and black chronograph watch is designed for those who appreciate fine craftsmanship and timeless style.',
    imageUrl: 'https://picsum.photos/seed/17/800/1000',
    imageHint: 'gold watch',
    sizes: ['One Size'],
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Beige Chino Trousers',
    category: 'Boys',
    price: 1899,
    description: 'Versatile and stylish, these beige chino trousers are a staple for the modern man. Crafted from a comfortable stretch-cotton blend for all-day wear.',
    imageUrl: 'https://picsum.photos/seed/12/800/1000',
    imageHint: 'beige trousers',
    sizes: ['30', '32', '34', '36'],
    isFeatured: true,
  },
  {
    id: '5',
    name: 'Navy Blue Business Shirt',
    category: 'Boys',
    price: 1399,
    description: 'A sharp and sophisticated navy blue shirt, essential for any business-formal wardrobe. Made from high-quality, breathable cotton.',
    imageUrl: 'https://picsum.photos/seed/11/800/1000',
    imageHint: 'blue shirt',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '6',
    name: 'Classic Black Suit',
    category: 'Boys',
    price: 12999,
    description: 'The epitome of formal elegance. Our classic black suit is impeccably tailored for a sharp, modern silhouette. A cornerstone of formal attire.',
    imageUrl: 'https://picsum.photos/seed/13/800/1000',
    imageHint: 'black suit',
    sizes: ['38R', '40R', '42R', '44L'],
  },
  {
    id: '7',
    name: 'White Office Sheath Dress',
    category: 'Girls',
    price: 2999,
    description: 'Exude confidence in this pristine white office sheath dress. Its clean lines and tailored fit offer a look of professional grace and style.',
    imageUrl: 'https://picsum.photos/seed/15/800/1000',
    imageHint: 'white dress',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: '8',
    name: 'Navy Pencil Skirt',
    category: 'Girls',
    price: 1599,
    description: 'A versatile and flattering navy pencil skirt. This timeless piece is perfect for creating a polished and professional look for the office.',
    imageUrl: 'https://picsum.photos/seed/16/800/1000',
    imageHint: 'pencil skirt',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: '9',
    name: 'Leather Oxford Shoes',
    category: 'Boys',
    price: 4599,
    description: 'Complete your formal ensemble with these exquisite leather Oxford shoes. Handcrafted for durability and timeless appeal.',
    imageUrl: 'https://picsum.photos/seed/18/800/1000',
    imageHint: 'leather shoes',
    sizes: ['8', '9', '10', '11', '12'],
  },
  {
    id: '10',
    name: 'Women\'s Beige Blazer',
    category: 'Girls',
    price: 4299,
    description: 'A chic and versatile beige blazer for women. Perfect for layering over dresses or pairing with trousers for a sophisticated look.',
    imageUrl: 'https://picsum.photos/seed/19/800/1000',
    imageHint: 'woman blazer',
    sizes: ['S', 'M', 'L'],
  },
];

export const categories: Category[] = [
  {
    id: 'cat-1',
    name: 'Girls\' Formal',
    href: '/shop?category=Girls',
    imageUrl: 'https://picsum.photos/seed/2/600/800',
    imageHint: 'formal dress'
  },
  {
    id: 'cat-2',
    name: 'Men\'s Old Money',
    href: '/shop?category=Boys',
    imageUrl: 'https://picsum.photos/seed/3/600/800',
    imageHint: 'men suit'
  },
  {
    id: 'cat-3',
    name: 'Accessories',
    href: '/shop?category=Accessories',
    imageUrl: 'https://picsum.photos/seed/4/600/800',
    imageHint: 'luxury watch'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Priya Sharma',
    location: 'Mumbai',
    quote: 'The quality and fit from AK Collections are unmatched. Their formal wear gives me the confidence I need for my corporate career. Truly timeless elegance!',
    avatarUrl: 'https://picsum.photos/seed/5/100/100',
    avatarHint: 'woman portrait'
  },
  {
    id: 'test-2',
    name: 'Rohan Mehra',
    location: 'Delhi',
    quote: 'I\'ve been searching for that perfect "old money" aesthetic, and I found it at AK Collections. The shirts and trousers are exceptional. Highly recommended.',
    avatarUrl: 'https://picsum.photos/seed/6/100/100',
    avatarHint: 'man portrait'
  },
  {
    id: 'test-3',
    name: 'Ananya Singh',
    location: 'Bangalore',
    quote: 'Absolutely in love with the blazer dress I bought. It\'s the perfect blend of modern style and professional grace. I get compliments every time I wear it.',
    avatarUrl: 'https://picsum.photos/seed/7/100/100',
    imageHint: 'person smiling'
  },
];
