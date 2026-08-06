import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold tracking-tight">
        Zetein
      </h1>

      <p className="mt-4 text-xl text-muted-foreground">
        Find and manage your domains.
      </p>

      <div className="mt-10 flex w-full max-w-xl gap-3">
        <Input
          placeholder="Search your domain..."
          className="h-12"
        />

        <Button className="h-12">
          Search
        </Button>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Fast. Simple. Private.
      </p>
    </section>
  );
}
