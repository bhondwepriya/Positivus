import { useState } from "react";
import { testimonials } from "../data/testimonials";
import TestimonialCard from "../components/TestimonialCard";
import Star from "../assets/star.png";
import SectionTitle from "../components/SectionTitle";

export default function Testimonials() {
  const [current, setCurrent] = useState(1);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));

  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const prevIndex = (current - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (current + 1) % testimonials.length;

  return (
    <section className="px-4 md:px-20 py-16 md:py-24">
      {/* HEADER */}
      <SectionTitle
        title="Testimonials"
        description="Hear from our satisfied clients"
      />

      {/* SLIDER CONTAINER */}
      <div className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-[48px] py-20 md:py-28 overflow-hidden">
        <div className="flex justify-center md:hidden">
          <TestimonialCard
            quote={testimonials[current].text}
            name={testimonials[current].name}
            role={testimonials[current].role}
            active
          />
        </div>

        <div className="hidden md:flex justify-center items-center gap-24">
          <TestimonialCard
            quote={testimonials[prevIndex].text}
            name={testimonials[prevIndex].name}
            role={testimonials[prevIndex].role}
          />

          <TestimonialCard
            quote={testimonials[current].text}
            name={testimonials[current].name}
            role={testimonials[current].role}
            active
          />

          <TestimonialCard
            quote={testimonials[nextIndex].text}
            name={testimonials[nextIndex].name}
            role={testimonials[nextIndex].role}
          />
        </div>

        {/* CONTROLS */}
        <div className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-10 md:gap-8">
          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="text-light/60 hover:text-light font-bold transition"
          >
            <svg width="26" height="16" viewBox="0 0 26 16">
              <path
                d="M8 8H20"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M8 8L13 3"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M8 8L13 13"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* STARS (ALWAYS 5) */}
          <div className="flex gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={Star}
                alt="star"
                className={`w-5 h-5 ${
                  i === current ? "opacity-100" : "opacity-30"
                }`}
              />
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="text-light/60 hover:text-light font-bold transition"
          >
            <svg width="26" height="16" viewBox="0 0 26 16">
              <path
                d="M6 8H18"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M18 8L13 3"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M18 8L13 13"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
