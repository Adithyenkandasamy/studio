import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <Image
        src="/akcollections-alt.png"
        alt="AK Collections Logo"
        width={120}
        height={40}
        className="h-8 w-auto"
        priority
      />
    </div>
  );
}
