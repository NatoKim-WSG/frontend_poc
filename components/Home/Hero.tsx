"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      badge: { icon: "fa-certificate", text: "Official NBI Service" },
      title: "Secure Your NBI Clearance Online",
      description:
        "Apply or renew your NBI Clearance through our official website. Skip the long lines and complete your application with just a few clicks.",
      button: { text: "Apply Now", href: "/apply#new" },
    },
    {
      badge: { icon: "fa-rocket", text: "Fast & Efficient" },
      title: "Nationwide Service Coverage",
      description:
        "We have offices and partner agencies across the Philippines. Apply online and choose your preferred location for biometrics capture.",
      button: { text: "Find Branches", href: "/branches" },
    },
    {
      badge: { icon: "fa-globe", text: "For OFWs" },
      title: "Special Services for Filipinos Abroad",
      description:
        "Special procedures available for Filipinos overseas who need to process their NBI Clearance for foreign employment or visa applications.",
      button: { text: "Learn More", href: "/apply#new" },
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-700 via-teal-700 to-blue-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-[500px] md:min-h-[600px]">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="h-full flex items-center justify-center px-4 py-16 md:py-20">
              <div className="max-w-4xl mx-auto text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold mb-6">
                  <i className={`fas ${slide.badge.icon}`}></i>
                  {slide.badge.text}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{slide.title}</h1>

                {/* Description */}
                <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
                  {slide.description}
                </p>

                {/* Button */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <Link
                    href={slide.button.href}
                    className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors font-semibold text-lg shadow-lg"
                  >
                    {slide.button.text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center items-center gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? "bg-white" : "bg-gray-400 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
