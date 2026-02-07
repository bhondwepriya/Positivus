export default function Footer() {
  return (
    <footer className="bg-dark text-light px-6 md:px-20 py-16">
      {/* TOP ROW */}
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 text-center md:text-left">
        {/* LOGO */}
        <div className="flex items-center justify-center md:justify-start gap-2 text-lg font-semibold">
          <span className="text-xl">★</span>
          <span>Positivus</span>
        </div>

        {/* NAV */}
        <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-10 text-sm text-light/80 underline">
          {["About us", "Services", "Use Cases", "Pricing", "Blog"].map(
            (item) => (
              <a key={item} href="#" className="hover:text-light">
                {item}
              </a>
            ),
          )}
        </nav>

        {/* SOCIAL ICONS – DESKTOP */}
        <div className="hidden md:flex gap-4">
          {["in", "f", "t"].map((icon) => (
            <div
              key={icon}
              className="w-9 h-9 rounded-full bg-light text-dark
                 flex items-center justify-center font-semibold"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left">
        {/* CONTACT INFO */}
        <div>
          <span className="inline-block bg-primary text-dark px-4 py-1 rounded-md font-semibold mb-6 ">
            Contact us:
          </span>

          <div className="space-y-3 text-sm text-light/70">
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>
              Address: 1234 Main St
              <br />
              Moonstone City, Stardust State 12345
            </p>
          </div>
        </div>

        {/* SUBSCRIBE */}
        <div
          className="bg-[#1f2028] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-6 items-center text-center md:text-left
"
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full md:flex-1 bg-transparent border border-light/30 rounded-xl px-4 py-3 text-sm outline-none"
          />
          <button className="w-full md:w-auto bg-primary text-dark font-medium px-6 py-3 rounded-xl">
            Subscribe to news
          </button>
        </div>
      </div>

      {/* SOCIAL ICONS – MOBILE */}
      <div className="flex md:hidden justify-center gap-6 mb-8">
        {["in", "f", "t"].map((icon) => (
          <div
            key={icon}
            className="w-10 h-10 rounded-full bg-light text-dark
                 flex items-center justify-center font-semibold"
          >
            {icon}
          </div>
        ))}
      </div>

      {/* DIVIDER */}
      <div className="my-12 h-px bg-light/20" />

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-light/50">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a href="#" className="underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
