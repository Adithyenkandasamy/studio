import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-primary"
      >
        <path d="M6,10 C6,7 8,5 12,5 C16,5 18,7 18,10" />
        <path d="M3.5 10H20.5" />
        <path d="M8 10.5 C5 11, 5, 14, 8, 14" />
        <path d="M16 10.5 C19 11, 19, 14, 16, 14" />
        <path d="M8 14H16" />
        <path d="M11.2,8.3 Q12,7.5 12.8,8.3 T14.2,9.5 Q12,11.5 9.8,9.5 T11.2,8.3 Z" fill="currentColor" strokeWidth="0.5"/>
      </svg>
      <span
        className={cn(
          "font-headline text-2xl font-bold tracking-tight text-primary"
        )}
      >
        AK Collections
      </span>
    </div>
  );
}
