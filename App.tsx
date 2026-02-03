import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  Mail, 
  ShieldCheck, 
  CheckCircle2, 
  Clock,
  Menu,
  X,
  ArrowRight,
  Star,
  ChevronRight,
  Award,
  Zap
} from 'lucide-react';
import { DARSHAN_CONTACT, SERVICES } from './constants';
import { BookingFormData } from './types';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    mobile: '',
    location: '',
    pestProblem: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const whatsappLink = `https://wa.me/919686407061?text=${encodeURIComponent("Hi Darshan, I need a pest control quote for my property. Please contact me.")}`;

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-green-100 selection:text-green-900 pb-20 md:pb-0">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className={`text-2xl font-black tracking-tighter transition-colors ${scrolled ? 'text-green-700' : 'text-slate-900'}`}>SIPC</span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-500">Secure India Pest Control</span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#services" className="text-sm font-bold text-slate-700 hover:text-green-600 transition-colors uppercase tracking-wider">Services</a>
              <a href="#about" className="text-sm font-bold text-slate-700 hover:text-green-600 transition-colors uppercase tracking-wider">About</a>
              <a href="#booking" className="px-6 py-2.5 bg-green-600 text-white rounded-full font-bold text-sm shadow-md hover:shadow-xl hover:bg-green-700 transition-all transform hover:-translate-y-0.5">Book Appointment</a>
              <a href={`tel:${DARSHAN_CONTACT.phone}`} className="flex items-center space-x-2 text-green-700 font-extrabold group">
                <div className="bg-green-100 p-2 rounded-full group-hover:bg-green-600 group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <span className="hidden lg:inline">{DARSHAN_CONTACT.phone}</span>
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-900">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="p-8 space-y-6">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-xl font-bold text-slate-800">Our Expertise</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-xl font-bold text-slate-800">Why Choose Darshan</a>
              <a href="#booking" onClick={() => setIsMenuOpen(false)} className="block text-xl font-bold text-slate-800">Request Quote</a>
              <div className="grid grid-cols-1 gap-4 pt-4 border-t border-slate-50">
                <a href={`tel:${DARSHAN_CONTACT.phone}`} className="flex items-center justify-center space-x-3 bg-green-600 text-white py-4 rounded-xl font-bold">
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
                <a href={whatsappLink} className="flex items-center justify-center space-x-3 bg-emerald-500 text-white py-4 rounded-xl font-bold">
                  <MessageCircle size={20} />
                  <span>WhatsApp Message</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 bg-white overflow-hidden bg-dot-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-green-100 shadow-sm">
                <Zap size={12} fill="currentColor" />
                <span>Expert Pest Management in Bengaluru</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 leading-tight tracking-tight mb-8">
                Eliminate Pests. <br />
                <span className="text-green-600">Reclaim Your Space.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
                Professional sales coordination and on-site expert evaluation for your property. Connect with <span className="text-slate-900 font-bold underline decoration-green-500 underline-offset-4">{DARSHAN_CONTACT.name}</span> for a bespoke treatment plan from SIPC.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${DARSHAN_CONTACT.phone}`} className="flex items-center justify-center space-x-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-xl hover:bg-slate-800 hover:-translate-y-1 transition-all">
                  <Phone size={20} />
                  <span>Get Free Quote</span>
                </a>
                <a href={whatsappLink} className="flex items-center justify-center space-x-3 px-8 py-4 bg-emerald-500 text-white rounded-2xl font-bold shadow-xl shadow-emerald-50 hover:bg-emerald-600 hover:-translate-y-1 transition-all">
                  <MessageCircle size={20} />
                  <span>Message on WhatsApp</span>
                </a>
              </div>

              <div className="mt-12 flex items-center space-x-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-amber-400 mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="font-bold text-slate-800">Trusted by 200+ clients this month</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 mt-16 lg:mt-0 relative">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" 
                  alt="Professional Pest Control" 
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                   <p className="text-xs font-black uppercase tracking-widest mb-1 opacity-80">Certified SIPC Partner</p>
                   <p className="text-lg font-bold">Safe, Non-Toxic Chemicals for Home & Office</p>
                </div>
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-green-400/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-green-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4">What we do</h4>
            <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Expert Solutions for Every Infestation</h2>
            <p className="text-slate-600 font-medium">As a senior business development lead, I coordinate specialized teams to handle specific pest issues with industrial precision.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-green-500 hover:shadow-2xl hover:shadow-green-100/50 transition-all duration-300">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">{service.problem}</p>
                <div className="pt-4 border-t border-slate-50">
                  <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2">Our Strategy</p>
                  <p className="text-xs font-bold text-slate-700 italic">"{service.approach}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Darshan */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 mt-12 lg:mt-0">
              <h4 className="text-green-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Dedicated Sales Support</h4>
              <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight leading-tight">Your Direct Link to <br />Premium Pest Protection.</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Navigating complex pest problems requires more than just a technician; it requires a strategic plan. With years of experience in business development at SIPC, I bridge the gap between your needs and our technical expertise.
              </p>
              
              <div className="space-y-4 text-slate-800">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 size={16} className="text-green-600" />
                  <span className="font-bold text-sm">On-site technical evaluation within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 size={16} className="text-green-600" />
                  <span className="font-bold text-sm">Direct account management for corporate clients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 size={16} className="text-green-600" />
                  <span className="font-bold text-sm">No hidden costs or unexpected service fees</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 size={16} className="text-green-600" />
                  <span className="font-bold text-sm">100% Satisfaction Guarantee on all AMC plans</span>
                </div>
              </div>

              <div className="mt-12 flex items-center space-x-6 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="w-16 h-16 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center">
                  <Award size={32} className="text-green-600" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">{DARSHAN_CONTACT.name}</h5>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{DARSHAN_CONTACT.designation}</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-green-600 transform rotate-3 rounded-[3rem]"></div>
                <div className="relative bg-slate-900 p-10 md:p-16 rounded-[3rem] text-white overflow-hidden">
                  <ShieldCheck size={120} className="absolute -bottom-10 -right-10 opacity-10" />
                  <h3 className="text-3xl font-black mb-6">Why SIPC?</h3>
                  <div className="space-y-8">
                    <div>
                      <span className="text-green-400 font-black block mb-2 text-xl">01. Certified Experts</span>
                      <p className="text-slate-400 text-sm">All our field technicians are government-certified and background verified.</p>
                    </div>
                    <div>
                      <span className="text-green-400 font-black block mb-2 text-xl">02. Eco-Friendly</span>
                      <p className="text-slate-400 text-sm">We use chemicals that are Bayer-approved and safe for children and pets.</p>
                    </div>
                    <div>
                      <span className="text-green-400 font-black block mb-2 text-xl">03. High Efficacy</span>
                      <p className="text-slate-400 text-sm">Our treatment methods target the source, not just the visible pests.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-slate-200/60 overflow-hidden border border-slate-100">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 md:p-16 bg-slate-900 text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl font-black mb-6 tracking-tight">Request an <br />Evaluation Slot</h2>
                  <p className="text-slate-400 mb-10 font-medium">Complete the form and Darshan will reach out within 30 minutes during business hours.</p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center"><Phone size={20} className="text-green-400" /></div>
                      <span className="font-bold">{DARSHAN_CONTACT.phone}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center"><Mail size={20} className="text-green-400" /></div>
                      <span className="font-bold">{DARSHAN_CONTACT.email}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/10">
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Fastest Response</p>
                   <p className="font-bold text-green-400">Available 9:00 AM — 8:00 PM</p>
                </div>
              </div>

              <div className="p-10 md:p-16">
                {formSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">Request Sent!</h3>
                    <p className="text-slate-500 text-sm">Darshan has been notified and will call you shortly. Thank you!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Full Name</label>
                      <input 
                        type="text" name="name" required value={formData.name} onChange={handleInputChange}
                        className="w-full px-5 py-3.5 bg-slate-50 border-2 border-transparent focus:border-green-500 focus:bg-white rounded-xl outline-none transition-all font-bold"
                        placeholder="e.g. Rahul Sharma"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Mobile Number</label>
                        <input 
                          type="tel" name="mobile" required value={formData.mobile} onChange={handleInputChange}
                          className="w-full px-5 py-3.5 bg-slate-50 border-2 border-transparent focus:border-green-500 focus:bg-white rounded-xl outline-none transition-all font-bold"
                          placeholder="+91..."
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Location</label>
                        <input 
                          type="text" name="location" required value={formData.location} onChange={handleInputChange}
                          className="w-full px-5 py-3.5 bg-slate-50 border-2 border-transparent focus:border-green-500 focus:bg-white rounded-xl outline-none transition-all font-bold"
                          placeholder="Area/Layout"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Pest Issue</label>
                      <select 
                        name="pestProblem" required value={formData.pestProblem} onChange={handleInputChange}
                        className="w-full px-5 py-3.5 bg-slate-50 border-2 border-transparent focus:border-green-500 focus:bg-white rounded-xl outline-none transition-all font-bold appearance-none cursor-pointer"
                      >
                        <option value="">Select Category</option>
                        {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                        <option value="Custom">Other Inquiries</option>
                      </select>
                    </div>
                    <button type="submit" className="w-full py-4 bg-green-600 text-white rounded-xl font-black shadow-lg hover:bg-green-700 hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-3">
                      <span>Submit Request</span>
                      <ArrowRight size={20} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-32 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-16 md:gap-8">
            <div className="col-span-1">
              <div className="flex flex-col mb-8">
                <span className="text-3xl font-black tracking-tighter text-slate-900">SIPC</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Secure India Pest Control</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                Premier pest management solutions across Bengaluru. Specialized in both residential and industrial-grade protection.
              </p>
            </div>
            
            <div className="col-span-1">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Contact Person</h5>
              <div className="space-y-4">
                <p className="font-black text-slate-900">{DARSHAN_CONTACT.name}</p>
                <p className="text-xs font-bold text-green-600 uppercase tracking-widest">{DARSHAN_CONTACT.designation}</p>
                <div className="pt-4 flex flex-col space-y-2 text-sm font-bold text-slate-600">
                  <a href={`tel:${DARSHAN_CONTACT.phone}`} className="hover:text-green-600 transition-colors flex items-center space-x-2">
                    <Phone size={14} />
                    <span>{DARSHAN_CONTACT.phone}</span>
                  </a>
                  <a href={`mailto:${DARSHAN_CONTACT.email}`} className="hover:text-green-600 transition-colors flex items-center space-x-2">
                    <Mail size={14} />
                    <span>{DARSHAN_CONTACT.email}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Quick Navigation</h5>
              <ul className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm font-bold text-slate-600">
                <li><a href="#services" className="hover:text-green-600 transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-green-600 transition-colors">Why SIPC</a></li>
                <li><a href="#booking" className="hover:text-green-600 transition-colors">Booking</a></li>
                <li><a href={whatsappLink} className="hover:text-green-600 transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-20 pt-10 border-t border-slate-50 text-center">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">
              © {new Date().getFullYear()} DARSHAN N G • SIPC SALES COORDINATION • BENGALURU
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Footer Bar */}
      <div className="fixed bottom-0 left-0 w-full md:hidden z-[60] p-4 bg-white/80 backdrop-blur-xl border-t border-slate-100 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <a href={`tel:${DARSHAN_CONTACT.phone}`} className="flex-1 flex items-center justify-center space-x-2 bg-slate-900 text-white py-4 rounded-2xl font-black text-sm shadow-xl active:scale-95 transition-transform">
            <Phone size={18} />
            <span>Call Now</span>
          </a>
          <a href={whatsappLink} className="flex-1 flex items-center justify-center space-x-2 bg-emerald-500 text-white py-4 rounded-2xl font-black text-sm shadow-xl shadow-emerald-100 active:scale-95 transition-transform">
            <MessageCircle size={18} />
            <span>WhatsApp Now</span>
          </a>
        </div>
      </div>

    </div>
  );
};

export default App;