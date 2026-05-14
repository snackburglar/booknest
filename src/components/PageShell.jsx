import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  { href: "/genres", label: "Genres" },
  { href: "/authors", label: "Authors" },
  { href: "/search", label: "Search" },
];

function isActivePath(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function PageShell({ children }) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      {/* header */}
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-xl font-medium tracking-tight text-ink"
          >
            BookNest
          </Link>
          <nav aria-label="Primary navigation" className="flex flex-wrap gap-2">
            {navItems.map((item) => {
              //  are we on this page?
              const isActive = isActivePath(router.pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-semibold transition text-stone-600 hover:bg-stone-100 hover:text-ink`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      {/* footer */}
      <footer className="mt-auto border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 BookNest</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-moss">
              Privacy
            </Link>
            <Link href="/accessibility" className="hover:text-moss">
              Accessibility
            </Link>
            <Link href="/contact" className="hover:text-moss">
              Contact
            </Link>
            <Link href="/about" className="hover:text-moss">
              About
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
