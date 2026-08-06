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
        "flex items-center gap-5 text-sm text-gray-600",
        orientation === "vertical" && "flex-col items-start gap-6",
        className
      )}
    >
      <a href="/login">
        Login
      </a>

      <a href="/register">
        Register
      </a>

      <a href="/about">
        About Zetein
      </a>
    </nav>
  );
}
