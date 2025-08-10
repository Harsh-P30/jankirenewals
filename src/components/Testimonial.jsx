import { useRef, useEffect } from "react";
import TestimonialCard from "./Cards/TestimonialCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { testimonials } from "../data/testimonial";

export default function Testimonial() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  // Continuous auto-scroll
  useEffect(() => {
    const container = scrollRef.current;
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return; // only for mobile

    let scrollAmount = 0.5; // speed in px per frame
    let animationFrame;

    const smoothScroll = () => {
      if (!container) return;

      container.scrollLeft += scrollAmount;

      // Loop back when reaching end
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(smoothScroll);
    };

    animationFrame = requestAnimationFrame(smoothScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="flex flex-col justify-center items-center py-16 pb-26 bg-white relative w-full">
      <h2 className="text-3xl font-semibold mb-10 text-left w-full max-w-6xl px-6">
        What Our Customers Say
      </h2>

      {/* Desktop Arrows */}
      <button
        onClick={scrollLeft}
        className="hidden xl:block absolute left-40 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-black p-3 rounded-full shadow-md"
      >
        <IoIosArrowBack />
      </button>

      <button
        onClick={scrollRight}
        className="hidden xl:block absolute right-32 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-black p-3 rounded-full shadow-md"
      >
        <IoIosArrowForward />
      </button>

      {/* Scrollable Testimonials */}
      <div
        ref={scrollRef}
        className="flex space-x-6 py-9 overflow-x-auto px-6 w-full max-w-6xl scrollbar-hide snap-x snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="snap-start flex-shrink-0 w-80 h-64" // fixed same size for all cards
          >
            <TestimonialCard
              name={item.name}
              role={item.role}
              message={item.message}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
