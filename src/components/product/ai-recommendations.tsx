import { getAIProductRecommendations, AIProductRecommendationsOutput } from '@/ai/flows/ai-product-recommendations';
import { products } from '@/lib/data';
import type { Product } from '@/lib/types';
import { ProductCard } from '@/components/shop/product-card';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link';

interface AIRecommendationsProps {
  currentProduct: Product;
}

// Helper to find full product details from mock data using ID from AI output
function getProductDetails(aiProduct: AIProductRecommendationsOutput[0]): Product | undefined {
  const found = products.find(p => p.name.toLowerCase() === aiProduct.name.toLowerCase());
  if (found) return found;

  // Fallback if name doesn't match exactly, try to find a similar one
  return products.find(p => p.category === aiProduct.category);
}

export async function AIRecommendations({ currentProduct }: AIRecommendationsProps) {
  const recommendations = await getAIProductRecommendations({
    recentlyViewedProducts: [{
      productId: currentProduct.id,
      name: currentProduct.name,
      category: currentProduct.category,
      description: currentProduct.description,
    }]
  });

  if (!recommendations || recommendations.length === 0) {
    return null;
  }

  const detailedRecommendations = recommendations
    .map(rec => {
        const productDetails = getProductDetails(rec);
        return productDetails ? { ...productDetails, reason: rec.reason } : null;
    })
    .filter((p): p is Product & { reason: string } => p !== null);

  return (
    <div>
        <h2 className="font-headline text-4xl font-bold text-center">You Might Also Like</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-center">
            AI-powered recommendations based on the item you're viewing.
        </p>

        <Carousel className="w-full mt-12" opts={{ align: "start", loop: false }}>
            <CarouselContent className="-ml-4">
            {detailedRecommendations.map((product) => (
                <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                    <div className="h-full p-1">
                        <Card className="flex flex-col h-full overflow-hidden">
                            <CardContent className="p-0 flex-grow">
                                <ProductCard product={product} />
                            </CardContent>
                            <CardFooter className="p-4 bg-secondary">
                                <p className="text-sm text-secondary-foreground">
                                    <strong>Why we suggest it:</strong> {product.reason}
                                </p>
                            </CardFooter>
                        </Card>
                    </div>
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
  );
}
