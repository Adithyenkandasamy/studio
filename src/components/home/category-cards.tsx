import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/data";

export function CategoryCards() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <h2 className="text-center font-headline text-4xl font-bold">
          Our Collections
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} href={category.href} className="group relative block h-96 overflow-hidden rounded-lg">
              <Image
                src={category.imageUrl}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={category.imageHint}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center text-white">
                <h3 className="font-headline text-3xl font-bold">{category.name}</h3>
                <Button variant="secondary" className="mt-4">Shop Now</Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
