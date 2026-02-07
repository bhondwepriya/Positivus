export default function TestimonialCard({ quote, name, role, active }) {
  return (
    <div
      className={`relative w-[300px] md:w-[520px] shrink-0 transition-all duration-500
    ${
      active
        ? "opacity-100 scale-100 translate-y-4"
        : "opacity-40 scale-95 translate-y-0"
    }
  `}
    >
      {/* CARD */}
      <div className="relative bg-[#151515] border border-primary rounded-[32px] px-10 py-8">
        <p className="text-light text-base leading-relaxed">“{quote}”</p>

        {/* NOTCH */}
        <div className="absolute left-[20%] bottom-0 -translate-x-1/2 translate-y-1/2">
          <div className="w-8 h-8 bg-[#151515] rotate-45 border-b border-r border-primary" />
        </div>
      </div>

      {/* NAME */}
      <div className="relative mt-10 h-[48px]">
        <div className="absolute left-[20%] -translate-x-1/2 text-center">
          <p className="text-primary font-semibold">{name}</p>
          <p className="text-light/60 text-sm mt-1">{role}</p>
        </div>
      </div>
    </div>
  );
}
