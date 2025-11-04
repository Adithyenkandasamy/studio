import Image from 'next/image';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container py-16 sm:py-24">
          <div className="text-center">
            <h1 className="font-headline text-5xl font-bold">About AK Collections</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              The story behind our passion for timeless fashion.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://picsum.photos/seed/23/1200/800"
                alt="Founder"
                width={600}
                height={400}
                className="w-full object-cover"
                data-ai-hint="fashion designer"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-headline text-3xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                “To bring timeless elegance and premium formal fashion to everyone.”
              </p>
              <p>
                AK Collections was born from a desire to make high-quality, elegant formal wear accessible. We believe that true style is timeless, and our collections are curated to reflect a sophisticated aesthetic that transcends fleeting trends.
              </p>
              <p>
                Each piece in our collection is crafted with meticulous attention to detail, using only the finest materials. We cater to the discerning individual who values quality, craftsmanship, and a polished, confident look. From the boardroom to formal events, AK Collections provides the perfect ensemble for every significant moment.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
