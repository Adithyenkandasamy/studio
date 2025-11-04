"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { Product } from '@/lib/types';
import { Card } from '@/components/ui/card';

interface ImageGalleryProps {
  images: NonNullable<Product['gallery']>;
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      <Card className="overflow-hidden rounded-lg">
        <div className="relative h-[400px] w-full md:h-[600px]">
          <Image
            src={selectedImage.url}
            alt={selectedImage.hint}
            fill
            className="object-cover"
            data-ai-hint={selectedImage.hint}
          />
        </div>
      </Card>
      <div className="mt-4 grid grid-cols-5 gap-4">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className={cn(
              "overflow-hidden rounded-md border-2",
              selectedImage.id === image.id ? "border-primary" : "border-transparent"
            )}
          >
            <div className="relative aspect-square w-full">
              <Image
                src={image.url}
                alt={image.hint}
                fill
                className="object-cover"
                data-ai-hint={image.hint}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
