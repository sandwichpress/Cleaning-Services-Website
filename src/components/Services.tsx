import React from 'react';
import { motion } from 'motion/react';
import { Droplets, Thermometer, Hammer, Settings } from 'lucide-react';

const services = [
  {
    title: 'Cleaning',
    description: 'Robotic scrubbing, chemical balancing, and debris removal for a pristine swim.',
    icon: Droplets,
  },
  {
    title: 'Heating',
    description: 'Solar, gas, and electric heat pump installations for year-round comfort.',
    icon: Thermometer,
  },
  {
    title: 'Renovations',
    description: 'Resurfacing, tiling, and aesthetic upgrades to modernize your outdoor space.',
    icon: Hammer,
  },
  {
    title: 'Equipment',
    description: 'Premium pump, filter, and chlorinator servicing and replacements.',
    icon: Settings,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-navy-800 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-aqua-500/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Boutique <span className="text-aqua-500">Services</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Comprehensive care tailored to the unique demands of Australian coastal and inland climates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 rounded-3xl hover:border-aqua-500/50 transition-all group"
            >
              <div className="w-16 h-16 bg-aqua-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-aqua-500 transition-colors">
                <service.icon size={32} className="text-aqua-500 group-hover:text-navy-900 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
