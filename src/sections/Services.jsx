import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

export default function Services() {
  return (
    <section className="px-4 md:px-20 py-16 md:py-24">
      <SectionTitle
        title="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            bg={service.bg}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
}
