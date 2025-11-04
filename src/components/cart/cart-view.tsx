"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckoutForm } from "./checkout-form";

export function CartView() {
    const { cartItems, removeFromCart, updateQuantity, cartCount, totalPrice } = useCart();

    if (cartCount === 0) {
        return (
            <div className="text-center">
                <p className="text-xl text-muted-foreground">Your cart is empty.</p>
                <Button asChild className="mt-6">
                    <Link href="/shop">Start Shopping</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:items-start">
            <div className="lg:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Cart Items</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {cartItems.map(item => (
                                <div key={`${item.product.id}-${item.size}`} className="flex items-start gap-4">
                                    <div className="relative h-24 w-24 overflow-hidden rounded-md">
                                        <Image src={item.product.imageUrl} alt={item.product.name} fill className="object-cover" />
                                    </div>
                                    <div className="flex-grow">
                                        <Link href={`/shop/${item.product.id}`} className="font-semibold hover:underline">{item.product.name}</Link>
                                        <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                                        <p className="text-sm text-muted-foreground">Price: ₹{item.product.price.toLocaleString()}</p>
                                        <div className="mt-2 flex items-center gap-2">
                                            <label htmlFor={`quantity-${item.product.id}-${item.size}`} className="sr-only">Quantity</label>
                                            <Input
                                                id={`quantity-${item.product.id}-${item.size}`}
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={(e) => updateQuantity(item.product.id, item.size, parseInt(e.target.value))}
                                                className="h-9 w-20"
                                            />
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold">₹{(item.product.price * item.quantity).toLocaleString()}</p>
                                        <Button variant="ghost" size="icon" className="mt-2" onClick={() => removeFromCart(item.product.id, item.size)}>
                                            <X className="h-4 w-4" />
                                            <span className="sr-only">Remove item</span>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="lg:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>₹{totalPrice.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>₹{totalPrice.toLocaleString()}</span>
                        </div>
                    </CardContent>
                </Card>
                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle>Checkout</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CheckoutForm />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
