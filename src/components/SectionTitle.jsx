export default function SectionTitle({ title, description }) {
  return (
    <div
      className="
        mb-14
        flex flex-col gap-6
        md:flex-row md:items-start md:gap-10
      "
    >
      <span
        className="
          inline-block
          bg-primary
          text-dark
          font-semibold
          px-4 py-2
          w-fit
          mx-auto
          rounded-md
          md:mx-0
          "
      >
        {title}
      </span>

      {/* DESCRIPTION */}
      <p
        className="
          text-dark/70
          text-center
          max-w-2xl
          py-1
          mx-auto
          md:text-left md:mx-0
        "
      >
        {description}
      </p>
    </div>
  );
}
