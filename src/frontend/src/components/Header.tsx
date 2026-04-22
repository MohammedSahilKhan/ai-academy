import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { GraduationCap, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card shadow-elevated"
          : "bg-card/95 backdrop-blur-sm shadow-subtle"
      } border-b border-border`}
      data-ocid="header"
    >
      <div className="">
        <div className="">
          {/* Logo */}
          <Link
            to="/"
             
          >
          <img src="/assets/generated/white_logo.png">  
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center shadow-subtle group-hover:scale-105 transition-smooth">
              <img src="/assets/generated/white_logo.png">
            </div>
            <span className="font-display font-bold text-xl text-foreground tracking-tight">
              Ai Academy
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            data-ocid="header.nav"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`header.nav_${link.label.toLowerCase()}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                  currentPath === link.to
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              className="gradient-accent text-white border-0 hover:opacity-90 transition-smooth font-medium"
              data-ocid="header.enroll_button"
            >
              <a
                href="https://wa.me/917734922886?text=Hi%2C%20I%20want%20to%20enroll%20in%20a%20course"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enroll Now
              </a>
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-smooth"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            data-ocid="header.mobile_menu_toggle"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-card border-t border-border px-4 py-4 flex flex-col gap-2 shadow-elevated"
          data-ocid="header.mobile_menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={`header.mobile_nav_${link.label.toLowerCase()}`}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-smooth ${
                currentPath === link.to
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="mt-2 gradient-accent text-white border-0 hover:opacity-90 font-medium"
            data-ocid="header.mobile_enroll_button"
          >
            <a
              href="https://wa.me/917734922886?text=Hi%2C%20I%20want%20to%20enroll%20in%20a%20course"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enroll Now on WhatsApp
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
