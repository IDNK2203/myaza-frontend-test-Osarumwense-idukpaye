"use client";
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "I've been using Uifry for over a year, and it's helped simplify all my payments.",
    author: "Ali Riaz",
    location: "Singapore",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "This platform transformed how I manage my finances. Couldn't be happier!",
    author: "Sarah Johnson",
    location: "New York",
    rating: 5,
  },
  {
    id: 3,
    quote: "The best financial app I've ever used. Intuitive and reliable.",
    author: "Miguel Santos",
    location: "Barcelona",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array(rating)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      ));
  };

  return (
    <div className="p-4 ">
      <div className="max-w-3xl mx-auto">
        <div className="relative min-h-[200px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute w-full transition-opacity duration-500 ${
                currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-white text-2xl sm:text-4xl font-bold mb-4">
                {`"${testimonial.quote}"`}
              </p>
              <div className="text-secondary-foreground">
                <p className="font-bold text-xl">{testimonial.author}</p>
                <p className="">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`size-3 mx-1 rounded-full transition-colors cursor-pointer ${
                currentSlide === index
                  ? "bg-primary-foreground w-4"
                  : "bg-primary"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
