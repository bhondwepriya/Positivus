export default function ProcessItem({
  index,
  title,
  description,
  isOpen,
  onToggle,
}) {
  return (
    <div
      className={`
        rounded-[24px] border border-dark
        transition-colors duration-300
        ${isOpen ? "bg-primary" : "bg-light"}
      `}
    >
      {/* OPEN STATE TOP CONTENT */}
      {isOpen && (
        <div className="px-8 md:px-12 pt-6">
          {/* DIVIDER ABOVE TITLE */}
          <div className="border-t border-dark mb-6"></div>
        </div>
      )}

      {/* HEADER ROW */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-8 md:px-12 py-6 text-left"
      >
        <div className="flex items-center gap-6">
          <span className="text-3xl md:text-4xl font-bold">
            {String(index).padStart(2, "0")}
          </span>
          <span className="font-semibold text-lg md:text-xl">{title}</span>
        </div>

        <div className="w-11 h-11 rounded-full border border-dark flex items-center justify-center text-2xl font-bold">
          {isOpen ? "−" : "+"}
        </div>
      </button>

      {/* DESCRIPTION */}
      {isOpen && (
        <div className="px-8 md:px-12 pb-10">
          <p className="text-sm md:text-base text-gray-800 max-w-5xl">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
