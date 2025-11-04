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
        <path d="M9.5 14.5c-1.5 0-2.5-1-2.5-2.5S8 9.5 9.5 9.5s2.5 1 2.5 2.5" />
        <path d="M14.5 14.5c1.5 0 2.5-1 2.5-2.5S16 9.5 14.5 9.5s-2.5 1-2.5 2.5" />
        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-2" />
        <path d="M18 18h2a2 2 0 0 0 2-2v-2" />
        <path d="M12 12h.01" />
        <path d="M12 2a4 4 0 0 0-4 4v2h8V6a4 4 0 0 0-4-4Z" />
        <path d="m14.29 17.71 1.42-1.42" />
        <path d="m9.71 17.71-1.42-1.42" />
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
