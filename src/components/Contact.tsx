import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Thank you! We will get back to you shortly.');
    reset();
  };

  return (
    <section id="contact" className="py-32 bg-navy-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Let's Start Your <span className="text-aqua-500">Dream</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              Ready for a crystal clear pool? Contact our specialists for a free on-site assessment and quote.
            </p>

            <div className="space-y-8 mb-12">
              <a href="tel:1800AZURE" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-aqua-500 transition-colors">
                  <Phone className="text-aqua-500 group-hover:text-navy-900 transition-colors" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm uppercase tracking-widest font-bold">Call Us</div>
                  <div className="text-white text-2xl font-bold">1800 AZURE</div>
                </div>
              </a>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center">
                  <Mail className="text-aqua-500" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm uppercase tracking-widest font-bold">Email</div>
                  <div className="text-white text-2xl font-bold">hello@azurepools.com.au</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center">
                  <MapPin className="text-aqua-500" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm uppercase tracking-widest font-bold">Head Office</div>
                  <div className="text-white text-2xl font-bold">Sydney, NSW 2000</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-aqua-500 hover:text-navy-900 transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-3xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Name</label>
                  <input
                    {...register('name', { required: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-aqua-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Phone</label>
                  <input
                    {...register('phone', { required: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-aqua-500 outline-none transition-all"
                    placeholder="0400 000 000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email</label>
                <input
                  {...register('email', { required: true })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-aqua-500 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Service Required</label>
                <select
                  {...register('service')}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-aqua-500 outline-none transition-all appearance-none"
                >
                  <option value="cleaning">Regular Cleaning</option>
                  <option value="heating">Heating Installation</option>
                  <option value="renovation">Renovation</option>
                  <option value="equipment">Equipment Service</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Message</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-aqua-500 outline-none transition-all resize-none"
                  placeholder="Tell us about your pool..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-aqua-500 text-navy-900 font-bold py-4 rounded-xl hover:bg-white transition-all transform active:scale-95"
              >
                Send Request
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-display font-bold tracking-tighter text-white">
            AZURE<span className="text-aqua-500">POOLS</span>
          </div>
          <div className="text-slate-500 text-sm">
            © 2024 Azure Pools Australia. All Rights Reserved.
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
}
