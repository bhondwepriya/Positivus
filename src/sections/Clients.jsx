import amazon from "../assets/amazon.png";
import dribbble from "../assets/dribble.png";
import hubspot from "../assets/hub.png";
import notion from "../assets/notion.png";
import netflix from "../assets/netfix.png";
import zoom from "../assets/zoom.png";

const logos = [amazon, dribbble, hubspot, notion, netflix, zoom];

export default function Clients() {
  return (
    <section className="mt-16 overflow-hidden">
      <div className="relative w-full">
        {/* TRACK */}
        <div className="flex w-max animate-marquee gap-16 opacity-60">
          {/* FIRST SET */}
          {logos.map((logo, index) => (
            <img
              key={`logo-1-${index}`}
              src={logo}
              alt="client logo"
              className="h-6 md:h-7"
            />
          ))}

          {logos.map((logo, index) => (
            <img
              key={`logo-2-${index}`}
              src={logo}
              alt="client logo"
              className="h-6 md:h-7"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
