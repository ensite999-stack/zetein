import { cn } from "@/lib/utils";

interface NavMenuProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function NavMenu({
  orientation = "horizontal",
  className,
}: NavMenuProps) {
  return (
    <nav
      className={cn(
        "flex items-center gap-8 text-sm font-medium",
        orientation === "vertical" &&
          "flex-col items-start gap-6",
        className
      )}
    >
      <a
        href="/login"
        className="transition-colors hover:text-primary"
      >
        Login
      </a>

      <a
        href="/register"
        className="transition-colors hover:text-primary"
      >
        Register
      </a>

      <a
        href="/about"
        className="transition-colors hover:text-primary"
      >
        About Zetein
      </a>
    </nav>
  );
}
