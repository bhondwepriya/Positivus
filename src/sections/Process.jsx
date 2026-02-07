import { useState } from "react";
import ProcessItem from "../components/ProcessItem";
import { processSteps } from "../data/process";
import SectionTitle from "../components/SectionTitle";

export default function Process() {
  const [openIndex, setOpenIndex] = useState(1); // first item open by default

  return (
    <section className="px-6 md:px-20 py-20">
      {/* HEADER */}
      <SectionTitle
        title="Our Working Process"
        description="Step-by-step guide to achieving your business goals"
      />

      {/* ACCORDION */}
      <div className="space-y-6">
        {processSteps.map((step, index) => (
          <ProcessItem
            key={step.id}
            index={index + 1}
            title={step.title}
            description={step.description}
            isOpen={openIndex === step.id}
            onToggle={() =>
              setOpenIndex(openIndex === step.id ? null : step.id)
            }
          />
        ))}
      </div>
    </section>
  );
}
