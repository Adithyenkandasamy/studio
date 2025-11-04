"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/cart-context";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  address: z.string().min(10, "Please enter a valid address."),
  contact: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number."),
});

export function CheckoutForm() {
    const { clearCart, cartItems, totalPrice } = useCart();
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            address: "",
            contact: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Here you would typically call a server action to save the order to Firestore.
        console.log("Order submitted:", {
            customerName: values.name,
            address: values.address,
            contact: values.contact,
            items: cartItems.map(item => ({
                productId: item.product.id,
                quantity: item.quantity,
                price: item.product.price,
                size: item.size
            })),
            totalPrice: totalPrice,
            status: "Pending",
        });

        toast({
            title: "Order Placed!",
            description: "Thank you for your purchase. We will process your order shortly.",
        });

        form.reset();
        clearCart();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Shipping Address</FormLabel>
                            <FormControl>
                                <Textarea placeholder="123 Luxury Lane, Fashion City" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Contact Number</FormLabel>
                            <FormControl>
                                <Input placeholder="+91 9876543210" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" size="lg">Place Order</Button>
            </form>
        </Form>
    )
}
