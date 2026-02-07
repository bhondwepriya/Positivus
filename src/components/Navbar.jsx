import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="px-6 md:px-20 py-6">
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <div className="text-2xl font-bold">Positivus</div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:opacity-70">
            About us
          </a>
          <a href="#" className="text-sm font-medium hover:opacity-70">
            Services
          </a>
          <a href="#" className="text-sm font-medium hover:opacity-70">
            Use Cases
          </a>
          <a href="#" className="text-sm font-medium hover:opacity-70">
            Pricing
          </a>
          <a href="#" className="text-sm font-medium hover:opacity-70">
            Blog
          </a>

          <button className="ml-4 border border-dark px-6 py-3 rounded-xl text-sm font-medium hover:bg-dark hover:text-white transition">
            Request a quote
          </button>
        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-dark"></span>
            <span className="block w-6 h-0.5 bg-dark"></span>
            <span className="block w-6 h-0.5 bg-dark"></span>
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-6 rounded-2xl border border-light bg-white p-6 space-y-6">
          <a href="#" className="block font-medium">
            About us
          </a>
          <a href="#" className="block font-medium">
            Services
          </a>
          <a href="#" className="block font-medium">
            Use Cases
          </a>
          <a href="#" className="block font-medium">
            Pricing
          </a>
          <a href="#" className="block font-medium">
            Blog
          </a>

          <button className="w-full border border-dark py-3 rounded-xl font-medium">
            Request a quote
          </button>
        </div>
      )}
    </header>
  );
}
