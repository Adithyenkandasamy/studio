import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Logo } from "@/components/icons/logo";
import { Button } from "@/components/ui/button";

// A custom component for WhatsApp icon
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" {...props}><path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.044-.53-.044-.315 0-.767.143-1.146.33-.38.187-.832.62-1.002.745-.214.125-.36.17-.53.244-.187.072- .372.142-.53.33-.214.21-.315.42-.387.62-.288.7-.33 1.39-.03 2.15.24.62.65.99.962 1.447.832 1.34 2.044 2.585 3.53 3.476.545.315 1.18.47 1.76.47.545 0 1.146-.03 1.46-.06.36-.03.832-.143 1.146-.867.214-.487.33-.945.33-1.46s-.03-.817-.072-1.146c-.03-.315-.1-.45-.24-.62z M25.426 6.574a13.34 13.34 0 0 0-4.426-3.213A13.83 13.83 0 0 0 16.06.5c-7.79 0-14.11 6.32-14.11 14.11 0 2.53.65 4.94 1.84 6.94l-1.9 6.81 6.96-1.85c1.93 1.06 4.14 1.7 6.44 1.7h.01c7.79 0 14.11-6.32 14.11-14.11a14.05 14.05 0 0 0-3.214-8.91z" fill="currentColor"></path></svg>
)

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Logo />
            <p className="max-w-xs text-center text-sm text-muted-foreground md:text-left">
              A new wave of eCommerce.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Link href="https://wa.me/919876543210" target="_blank">
                <Button variant="ghost" size="icon" aria-label="WhatsApp">
                    <WhatsAppIcon className="h-5 w-5 fill-current"/>
                </Button>
            </Link>
            <Link href="https://instagram.com" target="_blank">
                <Button variant="ghost" size="icon" aria-label="Instagram">
                    <Instagram className="h-5 w-5"/>
                </Button>
            </Link>
            <Link href="https://facebook.com" target="_blank">
                 <Button variant="ghost" size="icon" aria-label="Facebook">
                    <Facebook className="h-5 w-5"/>
                </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank">
                <Button variant="ghost" size="icon" aria-label="Twitter">
                    <Twitter className="h-5 w-5"/>
                </Button>
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Crtuu eCommerce. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
