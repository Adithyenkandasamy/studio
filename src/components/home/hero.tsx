import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full">
      <Image
        src="https://picsum.photos/seed/1/1920/1080"
        alt="Elegant fashion display"
        fill
        className="object-cover"
        data-ai-hint="fashion store"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="font-headline text-5xl font-bold md:text-7xl">
          Timeless Formal Elegance.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-200">
          Discover our curated collection of premium formal wear, designed for the modern connoisseur of style.
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/shop">Shop Now</Link>
        </Button>
      </div>
    </section>
  );
}
