import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    location: 'Vaucluse, NSW',
    text: 'Azure Pools transformed our green pond into a sparkling oasis. Their attention to detail is unmatched in Sydney.',
  },
  {
    name: 'Mark Thompson',
    location: 'Toorak, VIC',
    text: 'Professional, reliable, and invisible. They come, they clean, they leave. My pool has never looked better.',
  },
  {
    name: 'Elena Rodriguez',
    location: 'New Farm, QLD',
    text: 'The heating installation was seamless. Now we enjoy our pool even in the middle of winter. Highly recommend!',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="reviews" className="py-32 bg-navy-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-full mb-12">
          <Quote size={32} className="text-aqua-500" />
        </div>

        <div className="relative h-[300px] md:h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <p className="text-2xl md:text-4xl font-display font-light text-white italic leading-relaxed mb-8">
                "{testimonials[current].text}"
              </p>
              <div>
                <div className="text-white font-bold text-lg">{testimonials[current].name}</div>
                <div className="text-aqua-500 text-sm uppercase tracking-widest">{testimonials[current].location}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-navy-900 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? 'w-8 bg-aqua-500' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-navy-900 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
