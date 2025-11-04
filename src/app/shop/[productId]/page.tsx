import { products } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ImageGallery } from '@/components/product/image-gallery';
import { ProductInfo } from '@/components/product/product-info';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export async function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id,
  }));
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  const product = products.find(p => p.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container py-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <ImageGallery images={product.gallery || [{ id: product.id, url: product.imageUrl, hint: product.imageHint }]} />
            <ProductInfo product={product} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
