import Arrow from "../assets/arrow.png";

export default function ServiceCard({ title, bg, image }) {
  const isPrimary = bg === "primary";

  return (
    <div
      className={`
        rounded-[20px] border border-dark p-10 flex flex-col justify-between min-h-[300px]
        ${isPrimary ? "bg-primary" : "bg-light"}
      `}
    >
      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
        <div className="md:flex-1">
          <h3
            className={`
      inline
      box-decoration-clone
      px-5
      py-2
      rounded-xl
      font-semibold
      text-2xl
      leading-[1.35]
      max-w-[260px]
      ${isPrimary ? "bg-white" : "bg-primary"}
    `}
          >
            {title}
          </h3>
        </div>

        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="
    w-[140px]
    mx-auto
    md:mx-0
    md:w-[160px]
    lg:w-[200px]
    flex-shrink-0
  "
        />
      </div>

      <div className="flex items-center gap-4 mt-8">
        <div className="w-11 h-11 rounded-full bg-dark flex items-center justify-center">
          <img src={Arrow} alt="arrow" className="w-4 h-4" />
        </div>
        <span className="text-sm font-medium">Learn more</span>
      </div>
    </div>
  );
}
