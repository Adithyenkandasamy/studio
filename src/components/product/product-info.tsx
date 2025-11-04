"use client";

import React, { useState } from 'react';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cart-context';
import { useToast } from '@/hooks/use-toast';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(product.sizes.length === 1 ? product.sizes[0] : null);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: 'Please select a size',
        variant: 'destructive',
      });
      return;
    }
    addToCart(product, selectedSize);
  };

  return (
    <div className="space-y-6">
      <h1 className="font-headline text-4xl font-bold">{product.name}</h1>
      <p className="text-3xl font-bold text-primary">₹{product.price.toLocaleString()}</p>
      <p className="text-muted-foreground">{product.description}</p>
      
      <div>
        <h3 className="text-sm font-medium">Size</h3>
        <RadioGroup
          value={selectedSize ?? undefined}
          onValueChange={setSelectedSize}
          className="mt-2 flex flex-wrap gap-2"
        >
          {product.sizes.map((size) => (
            <Label
              key={size}
              htmlFor={`size-${size}`}
              className={`flex cursor-pointer items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent/80
                ${selectedSize === size ? 'border-primary bg-primary text-primary-foreground' : 'bg-card'}`}
            >
              <RadioGroupItem value={size} id={`size-${size}`} className="sr-only" />
              {size}
            </Label>
          ))}
        </RadioGroup>
      </div>

      <div className="flex gap-4">
        <Button size="lg" onClick={handleAddToCart}>Add to Cart</Button>
        <Button size="lg" variant="outline">Buy Now</Button>
      </div>
    </div>
  );
}
