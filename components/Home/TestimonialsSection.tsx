import React from "react";

import { Star, Quote } from "lucide-react";



interface Testimonial {
  quote: string;

  author: string;

  location: string;

  rating: number;
}



const testimonials: Testimonial[] = [
  {
    quote:
      "Bucceo made it incredibly easy to find and book dive schools in the Maldives. The platform is intuitive and the customer service is excellent!",

    author: "Sarah Johnson",

    location: "USA",

    rating: 5,
  },

  {
    quote:
      "As a dive instructor, being listed on Bucceo has significantly increased our bookings. It's the go-to platform for diving enthusiasts.",

    author: "Marco Rossi",

    location: "Italy",

    rating: 5,
  },

  {
    quote:
      "I've used Bucceo for three different dive trips now. The variety of options and reliable information makes trip planning so much easier.",

    author: "Emily Chen",

    location: "Singapore",

    rating: 5,
  },
];



const TestimonialsSection = () => {
  return (
    <section className="w-full bg-[#F8FBFF] py-24 px-4 md:px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
       

        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[#1B365D] text-3xl md:text-4xl font-bold tracking-tight">
            What Divers Say
          </h2>

          <p className="text-gray-500 text-base md:text-lg">
            Trusted by thousands of divers worldwide
          </p>
        </div>

       

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-10 flex flex-col justify-between relative shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50 hover:shadow-xl transition-shadow duration-300"
            >
            

              <div className="flex justify-between items-start mb-8">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-[#FFB800] fill-[#FFB800]"
                    />
                  ))}
                </div>

                <Quote className="text-[#E0F2FE]" size={36} strokeWidth={2.5} />
              </div>

             

              <div className="mb-10">
                <p className="text-[#4B5563] text-base leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              

              <div className="pt-6 border-t border-gray-50">
                <h4 className="text-[#1B365D] font-bold text-lg">{t.author}</h4>

                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
