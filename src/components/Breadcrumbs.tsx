import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { name: string; path?: string };

type Props = {
  items: Crumb[];
  className?: string;
};

const Breadcrumbs = ({ items, className = "" }: Props) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`bg-muted/40 border-b border-border ${className}`}
    >
      <div className="container py-3">
        <ol className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm text-muted-foreground">
          <li className="flex items-center">
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-primary transition-colors"
              aria-label="Home"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="sr-only sm:not-sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={`${item.name}-${idx}`} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
                {isLast || !item.path ? (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
