import React from 'react';
import { motion } from 'motion/react';

const projects = [
  {
    suburb: 'Mosman',
    image: 'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&q=80&w=800',
  },
  {
    suburb: 'Brighton',
    image: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&q=80&w=800',
  },
  {
    suburb: 'Cottesloe',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
  },
  {
    suburb: 'Noosa',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800',
  },
  {
    suburb: 'Double Bay',
    image: 'https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?auto=format&fit=crop&q=80&w=800',
  },
  {
    suburb: 'Main Beach',
    image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our Recent <span className="text-aqua-500">Work</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-lg">
              Real results from real Australian homes. We treat every pool as a masterpiece.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-white/10 mx-12 mb-4" />
          <div className="text-aqua-500 font-bold tracking-widest uppercase text-sm">
            Portfolio 2024
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy-800"
            >
              <img
                src={project.image}
                alt={`Pool in ${project.suburb}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="text-white text-2xl font-display font-bold mb-1">
                  {project.suburb}
                </div>
                <div className="text-aqua-500 text-xs font-bold uppercase tracking-widest">
                  Full Service Maintenance
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
