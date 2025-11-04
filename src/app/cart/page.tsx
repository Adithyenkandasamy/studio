import { CartView } from "@/components/cart/cart-view";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function CartPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow">
                <div className="container py-12">
                    <div className="text-center mb-12">
                        <h1 className="font-headline text-5xl font-bold">Your Shopping Cart</h1>
                    </div>
                    <CartView />
                </div>
            </main>
            <Footer />
        </div>
    );
}
