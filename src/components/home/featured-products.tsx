import Link from 'next/link';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/shop/product-card';
import { Button } from '@/components/ui/button';

export function FeaturedProducts() {
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4);

  return (
    <section className="bg-secondary py-16 sm:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center">
            <h2 className="font-headline text-4xl font-bold">Featured Products</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
                Handpicked selection of our finest and most popular items.
            </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
                <Link href="/shop">View All Products</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
