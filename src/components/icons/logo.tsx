import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-primary"
      >
        <path d="M4 12h16M4 12l6-6m10 6-6-6" />
        <path d="M8 12v8m8-8v8" />
      </svg>
      <span
        className={cn(
          "font-headline text-2xl font-bold tracking-tight text-primary"
        )}
      >
        Crtuu
      </span>
    </div>
  );
}
