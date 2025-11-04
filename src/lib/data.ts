import type { Product, Category, Testimonial } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White Formal Shirt',
    category: 'Boys',
    price: 1200,
    description: 'Experience unparalleled comfort and style with our premium cotton formal shirt. A timeless piece for any gentleman\'s wardrobe, perfect for business meetings or formal events.',
    imageUrl: '/products/classic-white-formal-shirt.webp',
    imageHint: 'white shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    isFeatured: true,
    gallery: [
      { id: 'product-shirt-1', url: '/products/classic-white-formal-shirt.webp', hint: 'white shirt' },
      { id: 'product-shirt-gallery-1', url: '/products/classic-white-formal-shirt-1.webp', hint: 'white shirt variant' },
      { id: 'product-shirt-gallery-2', url: '/products/classic-white-formal-shirt-2.webp', hint: 'white shirt detail' }
    ]
  },
  {
    id: '2',
    name: 'Elegant Black Blazer Dress',
    category: 'Men',
    price: 2000,
    description: 'Make a statement with this powerful and elegant black blazer dress. Tailored to perfection, it combines modern sophistication with classic formal wear.',
    imageUrl: '/products/rajini.jpg',
    imageHint: 'blazer dress',
    sizes: ['XS', 'S', 'M', 'L'],
    isFeatured: true,
    gallery: [
      { id: 'product-blazer-1', url: '/products/rajini.jpg', hint: 'black blazer dress' },
      { id: 'product-blazer-2', url: '/products/elegant-black-blazer-dress-1.webp', hint: 'blazer dress variant' },
      { id: 'product-blazer-3', url: '/products/elegant-black-blazer-dress-main.webp', hint: 'blazer dress detail' }
    ]
  },
  {
    id: '3',
    name: 'Gold Chronograph Watch',
    category: 'Accessories',
    price: 5000,
    description: 'A symbol of luxury and precision. This gold and black chronograph watch is designed for those who appreciate fine craftsmanship and timeless style.',
    imageUrl: '/products/gold-chronograph-watch.webp',
    imageHint: 'gold watch',
    sizes: ['One Size'],
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Beige Chino Trousers',
    category: 'Men',
    price: 1800,
    description: 'Versatile and stylish, these beige chino trousers are a staple for the modern man. Crafted from a comfortable stretch-cotton blend for all-day wear.',
    imageUrl: '/products/beige-chino-trousers.webp',
    imageHint: 'beige trousers',
    sizes: ['30', '32', '34', '36'],
    isFeatured: true,
  },
  {
    id: '5',
    name: 'Navy Blue Business Shirt',
    category: 'Men',
    price: 1300,
    description: 'A sharp and sophisticated navy blue shirt, essential for any business-formal wardrobe. Made from high-quality, breathable cotton.',
    imageUrl: '/products/Navy Blue Business Shirt.webp',
    imageHint: 'navy blue shirt',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '6',
    name: 'Classic Black Suit',
    category: 'Men',
    price: 5000,
    description: 'The epitome of formal elegance. Our classic black suit is impeccably tailored for a sharp, modern silhouette. A cornerstone of formal attire.',
    imageUrl: '/products/Classic Black Suit.jpg',
    imageHint: 'black suit',
    sizes: ['38R', '40R', '42R', '44L'],
  },
  {
    id: '7',
    name: 'White Office Sheath Dress',
    category: 'Women',
    price: 2000,
    description: 'Exude confidence in this pristine white office sheath dress. Its clean lines and tailored fit offer a look of professional grace and style.',
    imageUrl: '/products/White Office Sheath Dress.jpg',
    imageHint: 'white dress',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: '8',
    name: 'Navy Pencil Skirt',
    category: 'Girls',
    price: 1500,
    description: 'A versatile and flattering navy pencil skirt. This timeless piece is perfect for creating a polished and professional look for the office.',
    imageUrl: '/products/pencil skirt.jpg',
    imageHint: 'pencil skirt',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: '9',
    name: 'Leather Oxford Shoes',
    category: 'Men',
    price: 4500,
    description: 'Complete your formal ensemble with these exquisite leather Oxford shoes. Handcrafted for durability and timeless appeal.',
    imageUrl: '/products/Leather Oxford Shoes.webp',
    imageHint: 'leather shoes',
    sizes: ['8', '9', '10', '11', '12'],
  },
  {
    id: '10',
    name: 'Women\'s Beige Blazer',
    category: 'Girls',
    price: 4200,
    description: 'A chic and versatile beige blazer for women. Perfect for layering over dresses or pairing with trousers for a sophisticated look.',
    imageUrl: '/products/Women\'s Beige Blazer.jpg',
    imageHint: 'woman blazer',
    sizes: ['S', 'M', 'L'],
  },
];

export const categories: Category[] = [
  {
    id: 'cat-1',
    name: 'Girls\' Formal',
    href: '/shop?category=Girls',
    imageUrl: '/girls-formal.webp',
    imageHint: 'girls formal wear'
  },
  {
    id: 'cat-2',
    name: 'Men\'s Old Money',
    href: '/shop?category=Boys',
    imageUrl: '/oldmoney.jpg',
    imageHint: 'old money style'
  },
  {
    id: 'cat-3',
    name: 'Accessories',
    href: '/shop?category=Accessories',
    imageUrl: '/acceries.webp',
    imageHint: 'accessories'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'David Billa',
    location: 'Coimbatore',
    quote: 'The quality and fit from AK Collections are unmatched. Their formal wear gives me the confidence I need for my corporate career. Truly timeless elegance!',
    avatarUrl: 'https://i.pinimg.com/736x/9b/4f/6a/9b4f6a275665a2bd28497aa720834b03.jpg',
    avatarHint: 'man portrait'
  },
  {
    id: 'test-2',
    name: 'Mathialagan',
    location: 'Salem',
    quote: 'I\'ve been searching for that perfect "old money" aesthetic, and I found it at AK Collections. The shirts and trousers are exceptional. Highly recommended.',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw5BIM-rfKNucnRzP9-cWXw1VUzgI-uTvnrA&s`1',
    avatarHint: 'man portrait'
  },
  {
    id: 'test-3',
    name: 'Arun Pandiyan',
    location: 'Tirupur',
    quote: 'Absolutely in love with the blazer dress I bought. It\'s the perfect blend of modern style and professional grace. I get compliments every time I wear it.',
    avatarUrl: 'https://picsum.photos/seed/7/100/100',
    avatarHint: 'person smiling'
  },
  {
    id: 'test-4',
    name: 'Riswan',
    location: 'Nagapattinam',
    quote: 'I\'ve been searching for that perfect "old money" aesthetic, and I found it at AK Collections. The shirts and trousers are exceptional. Highly recommended.',
    avatarUrl: 'https://picsum.photos/seed/7/100/100',
    avatarHint: 'man portrait'
  },
  {
    id: 'test-5',
    name: 'Kathir',
    location: 'Tiruchirappalli',
    quote: 'Absolutely in love with the blazer dress I bought. It\'s the perfect blend of modern style and professional grace. I get compliments every time I wear it',
    avatarUrl: 'https://picsum.photos/seed/7/100/100',
    avatarHint: 'man portrait'
  },
  {
    id: 'test-6',
    name: 'Prathosh',
    location: 'Coimbatore',
    quote: 'The quality and fit from AK Collections are unmatched. Their formal wear gives me the confidence I need for my corporate career. Truly timeless elegance!',
    avatarUrl: 'https://picsum.photos/seed/7/100/100',
    avatarHint: 'man portrait'
  },
];
