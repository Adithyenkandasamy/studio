"use client";

import React, { useState, useMemo } from 'react';
import { products, categories } from '@/lib/data';
import { ProductCard } from '@/components/shop/product-card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('latest');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    if (activeCategory !== 'All') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    switch (sortOrder) {
      case 'price-asc':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return filtered.sort((a, b) => b.price - a.price);
      case 'latest':
      default:
        return filtered.reverse(); // Assuming higher ID is newer
    }
  }, [searchTerm, sortOrder, activeCategory]);
  
  const allCategories = [{ name: 'All' }, ...categories.map(c => ({ name: c.category ?? c.name.split("'")[0] }))]
    .filter((value, index, self) => self.findIndex(t => t.name === value.name) === index);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container py-12">
          <div className="text-center">
            <h1 className="font-headline text-5xl font-bold">Shop Our Collection</h1>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Browse our exclusive selection of formal wear and accessories.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex-grow">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className='flex gap-4'>
                <Tabs onValueChange={setActiveCategory} defaultValue="All">
                    <TabsList>
                        {allCategories.map(cat => (
                            <TabsTrigger key={cat.name} value={cat.name}>{cat.name}</TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
                <Select onValueChange={setSortOrder} defaultValue="latest">
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="latest">Latest</SelectItem>
                        <SelectItem value="price-asc">Price: Low to High</SelectItem>
                        <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    </SelectContent>
                </Select>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredAndSortedProducts.length > 0 ? (
              filteredAndSortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="col-span-full text-center text-muted-foreground">
                No products found.
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
