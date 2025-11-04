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
        <path d="M6 10v2a6 6 0 0 0 12 0v-2" />
        <path d="M14.5 9.5a2.5 2.5 0 0 1-5 0" />
        <path d="M6 9.5V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3.5" />
        <path d="M9.5 16.5a2.5 2.5 0 0 1 5 0" />
        <path d="M12 21a2.5 2.5 0 0 1-2.5-2.5" />
        <path d="M14.5 18.5a2.5 2.5 0 0 1-5 0" />
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
