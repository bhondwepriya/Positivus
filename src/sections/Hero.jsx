import heroImg from "../assets/Illustration.png";


export default function Hero() {
  return (
    <section className="px-6 md:px-20 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* LEFT / TOP (TEXT) */}
        <div className="order-1">
          <h1 className="h1">
            Navigating the <br />
            digital landscape <br />
            for success
          </h1>

          <div className="my-8 md:hidden">
            <img
              src={heroImg}
              alt="Digital marketing illustration"
              className="w-full"
            />
          </div>

          <p className="p mt-6 max-w-xl">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>

          <button className="mt-8 bg-dark text-white px-8 py-4 rounded-xl text-base font-medium w-full md:w-auto">
            Book a consultation
          </button>
        </div>

        <div className="hidden md:flex justify-end order-2">
          <img
            src={heroImg}
            alt="Digital marketing illustration"
            className="max-w-md w-full"
          />
        </div>
      </div>
    </section>
  );
}
