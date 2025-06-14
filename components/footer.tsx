import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="flex items-center justify-center mb-4">
          <Heart className="h-4 w-4 text-muted-foreground mr-2" />
          <span className="text-sm text-muted-foreground">
            Written with care and shared with hope
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Memoir. All thoughts are{" "}
          <a href="https://tegarxx.xyz/" className="underline">
            my own.
          </a>
        </p>
      </div>
    </footer>
  );
}
