
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  MapPin, 
  Mail, 
  ShieldCheck, 
  CheckCircle2, 
  UserCircle,
  Clock,
  Menu,
  X,
  ArrowRight,
  Info,
  Home,
  Zap,
  Star,
  ChevronRight,
  Award
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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-green-100 selection:text-green-900">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className={`text-2xl font-black tracking-tighter transition-colors ${scrolled ? 'text-green-700' : 'text-slate-900'}`}>SIPC</span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-500">Secure India Pest Control</span>
            </div>
            
            <div className="hidden md:flex space-x-10 items-center">
              <a href="#services" className="text-sm font-bold text-slate-700 hover:text-green-600 transition-colors uppercase tracking-wider">Services</a>
              <a href="#about" className="text-sm font-bold text-slate-700 hover:text-green-600 transition-colors uppercase tracking-wider">About</a>
              <a href="#booking" className="px-6 py-2.5 bg-green-600 text-white rounded-full font-bold text-sm shadow-md hover:shadow-xl hover:bg-green-700 transition-all transform hover:-translate-y-0.5">Book Slot</a>
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
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-2xl font-bold text-slate-800">Services</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-2xl font-bold text-slate-800">About</a>
              <a href="#booking" onClick={() => setIsMenuOpen(false)} className="block text-2xl font-bold text-slate-800">Book Appointment</a>
              <div className="grid grid-cols-1 gap-4 pt-4">
                <a href={`tel:${DARSHAN_CONTACT.phone}`} className="flex items-center justify-center space-x-3 bg-green-600 text-white py-4 rounded-2xl font-bold text-lg">
                  <Phone size={20} />
                  <span>Call Darshan</span>
                </a>
                <a href={whatsappLink} className="flex items-center justify-center space-x-3 bg-emerald-500 text-white py-4 rounded-2xl font-bold text-lg">
                  <MessageCircle size={20} />
                  <span>WhatsApp Now</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-40 bg-white overflow-hidden bg-dot-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-green-50 text-green-700 text-xs font-black uppercase tracking-[0.1em] mb-8 border border-green-100">
                <Star size={12} fill="currentColor" />
                <span>Premier Solutions in Bengaluru</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
                Eliminate Pests. <br />
                <span className="text-green-600">Reclaim Your Home.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed font-medium">
                Professional coordination for Bengaluru's most trusted pest management. Connect with <span className="text-slate-900 font-bold underline decoration-green-500 underline-offset-4">{DARSHAN_CONTACT.name}</span> for custom SIPC treatment plans.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <a href={`tel:${DARSHAN_CONTACT.phone}`} className="flex items-center justify-center space-x-3 px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold shadow-2xl hover:bg-slate-800 hover:-translate-y-1 transition-all">
                  <Phone size={22} />
                  <span>Immediate Assistance</span>
                </a>
                <a href={whatsappLink} className="flex items-center justify-center space-x-3 px-10 py-5 bg-emerald-500 text-white rounded-2xl font-bold shadow-xl shadow-emerald-100 hover:bg-emerald-600 hover:-translate-y-1 transition-all">
                  <MessageCircle size={22} />
                  <span>WhatsApp Quote</span>
                </a>
              </div>

              <div className="mt-16 flex flex-wrap gap-8 items-center opacity-70 grayscale">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Partnered With</span>
                <div className="font-black text-slate-300 text-xl tracking-tighter">SIPC INDIA</div>
                <div className="font-black text-slate-300 text-xl tracking-tighter">SECURE BENGALURU</div>
                <div className="font-black text-slate-300 text-xl tracking-tighter">GREEN-TECH</div>
              </div>
            </div>
            
            <div className="lg:col-span-5 mt-20 lg:mt-0 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Cleaning Service" 
                  className="w-full h-[550px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#fbbf24" className="text-amber-400" />)}
                  </div>
                  <p className="text-sm font-bold">Trusted by 5000+ homes in Bengaluru</p>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-slate-50 py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-3xl font-black text-slate-900 mb-1">24Hr</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Emergency Response</span>
            </div>
            <div className="flex flex-col items-center md:items-start border-l border-slate-200 md:pl-8">
              <span className="text-3xl font-black text-slate-900 mb-1">100%</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Eco-Safe Chemicals</span>
            </div>
            <div className="flex flex-col items-center md:items-start border-l border-slate-200 md:pl-8">
              <span className="text-3xl font-black text-slate-900 mb-1">9.8/10</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Customer Rating</span>
            </div>
            <div className="flex flex-col items-center md:items-start border-l border-slate-200 md:pl-8">
              <span className="text-3xl font-black text-slate-900 mb-1">Bengaluru</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Hyper-Local Experts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <section id="about" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="pt-12">
                  <div className="bg-green-600 p-8 rounded-[2rem] text-white shadow-xl mb-4">
                    <Award size={40} className="mb-6 opacity-80" />
                    <h4 className="text-xl font-bold mb-2 leading-snug">Service Excellence</h4>
                    <p className="text-sm text-green-100/80">Premium coordination by senior business lead Darshan N G.</p>
                  </div>
                  <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-xl">
                    <ShieldCheck size={40} className="mb-6 opacity-80" />
                    <h4 className="text-xl font-bold mb-2 leading-snug">Certified SIPC</h4>
                    <p className="text-sm text-slate-400">Government approved procedures and safety guidelines.</p>
                  </div>
                </div>
                <div>
                  <div className="bg-slate-100 p-8 rounded-[2rem] text-slate-900 mb-4 h-full">
                    <Clock size={40} className="mb-6 text-green-600" />
                    <h4 className="text-xl font-bold mb-2 leading-snug">Fast Booking</h4>
                    <p className="text-sm text-slate-500">Zero wait time. Direct sales desk access for quicker turnaround.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-20 lg:mt-0">
              <h4 className="text-green-600 font-black uppercase tracking-[0.2em] text-xs mb-4">The SIPC Sales Advantage</h4>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-8 tracking-tight">Personalized Pest <br />Prevention Strategy.</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Pest control isn't one-size-fits-all. As a <span className="text-slate-900 font-bold">Sr. Business Development Lead</span>, I ensure that your property gets a bespoke treatment plan based on its layout, location, and infestation severity.
              </p>
              
              <div className="space-y-6">
                {[
                  "On-site technical evaluation coordination",
                  "Direct account management for commercial clients",
                  "Pre & Post treatment consultation",
                  "Transparent pricing with no hidden technician fees"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-green-600" />
                    </div>
                    <span className="text-slate-800 font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-900 text-white relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
            <div className="max-w-2xl">
              <h4 className="text-green-400 font-black uppercase tracking-[0.2em] text-xs mb-4">Core Competencies</h4>
              <h2 className="text-4xl sm:text-5xl font-black mb-6">World-Class Specialized Services.</h2>
              <p className="text-slate-400 text-lg">Engineered for the unique environment of Bengaluru homes and IT parks.</p>
            </div>
            <a href="#booking" className="mt-8 md:mt-0 inline-flex items-center space-x-2 text-green-400 font-bold hover:text-green-300 transition-colors group">
              <span>View custom AMC plans</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="group relative bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white hover:border-white hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 overflow-hidden cursor-default">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-400 mb-8 group-hover:bg-green-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-500 transform">
                    <div className="transition-transform duration-500 group-hover:scale-110">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-slate-900 transition-colors">{service.title}</h3>
                  <p className="text-slate-400 group-hover:text-slate-600 text-sm leading-relaxed transition-colors line-clamp-3">
                    {service.problem} SIPC approach: {service.approach}
                  </p>
                </div>
                {/* Visual Flair Background */}
                <div className="absolute -bottom-6 -right-6 text-white/5 group-hover:text-green-500/10 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                  <ShieldCheck size={140} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-32 bg-white bg-dot-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-start">
            <div className="sticky top-40">
              <h2 className="text-5xl font-black text-slate-900 mb-10 tracking-tight leading-tight">Ready to live <br /><span className="text-green-600">pest-free?</span></h2>
              
              <div className="space-y-10">
                <div className="flex space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black">1</div>
                  <div>
                    <h5 className="text-xl font-black mb-2">Request Survey</h5>
                    <p className="text-slate-500">Submit the form. I will call you to understand the problem scale.</p>
                  </div>
                </div>
                <div className="flex space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black">2</div>
                  <div>
                    <h5 className="text-xl font-black mb-2">Technical Inspection</h5>
                    <p className="text-slate-500">Our expert technician visits to map nesting sites and risks.</p>
                  </div>
                </div>
                <div className="flex space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center text-white font-black">3</div>
                  <div>
                    <h5 className="text-xl font-black mb-2">Protection Applied</h5>
                    <p className="text-slate-500">Execution of treatment using industrial-grade, safe technology.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 lg:mt-0">
              <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden">
                {formSubmitted ? (
                  <div className="text-center py-20 animate-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-float">
                      <CheckCircle2 size={56} />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Request Received!</h3>
                    <p className="text-slate-600 text-lg mb-8 font-medium">Sit back, {formData.name}. Darshan will reach out to you within the hour.</p>
                    <button onClick={() => setFormSubmitted(false)} className="text-green-600 font-black border-b-2 border-green-600 hover:text-green-700 hover:border-green-700 transition-all">New Service Request</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="relative">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2 ml-1">Client Name</label>
                        <input 
                          type="text" name="name" required value={formData.name} onChange={handleInputChange}
                          className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-green-500 focus:bg-white rounded-2xl outline-none transition-all font-bold placeholder:text-slate-300"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="relative">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2 ml-1">Mobile Number</label>
                        <input 
                          type="tel" name="mobile" required value={formData.mobile} onChange={handleInputChange}
                          className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-green-500 focus:bg-white rounded-2xl outline-none transition-all font-bold placeholder:text-slate-300"
                          placeholder="Contact No"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2 ml-1">Service Area</label>
                      <input 
                        type="text" name="location" required value={formData.location} onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-green-500 focus:bg-white rounded-2xl outline-none transition-all font-bold placeholder:text-slate-300"
                        placeholder="e.g. HSR Layout, Koramangala"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2 ml-1">Problem Type</label>
                        <select 
                          name="pestProblem" required value={formData.pestProblem} onChange={handleInputChange}
                          className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-green-500 focus:bg-white rounded-2xl outline-none transition-all font-bold appearance-none cursor-pointer"
                        >
                          <option value="">Select Service</option>
                          {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                          <option value="Other">Custom Inquiry</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2 ml-1">Slot Pref</label>
                        <select 
                          name="preferredTime" required value={formData.preferredTime} onChange={handleInputChange}
                          className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-green-500 focus:bg-white rounded-2xl outline-none transition-all font-bold appearance-none cursor-pointer"
                        >
                          <option value="">Select Slot</option>
                          <option value="ASAP">ASAP (Urgent)</option>
                          <option value="Morning">Morning (9am-12pm)</option>
                          <option value="Afternoon">Afternoon (12pm-5pm)</option>
                        </select>
                      </div>
                    </div>

                    <button type="submit" className="w-full py-6 bg-green-600 text-white rounded-[1.5rem] font-black text-lg shadow-xl shadow-green-200 hover:bg-green-700 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center space-x-4">
                      <span>Secure My Service Slot</span>
                      <ArrowRight size={22} />
                    </button>
                    
                    <p className="text-center text-xs text-slate-400 font-bold uppercase tracking-widest">
                      <span className="text-green-600">Safe.</span> <span className="text-slate-300">|</span> <span className="text-green-600">Quick.</span> <span className="text-slate-300">|</span> <span className="text-green-600">Reliable.</span>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Detail */}
      <footer className="bg-slate-900 text-white pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4">
              <div className="mb-10">
                <span className="text-4xl font-black tracking-tighter text-green-400 mb-2 block">SIPC</span>
                <span className="text-xs font-black uppercase tracking-widest text-slate-500">Bengaluru Office</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-10 text-lg">
                Premium pest management solutions since 2012. Trusted by over 10,000 residential and commercial clients across Bengaluru.
              </p>
              <div className="flex space-x-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all cursor-default"><Star size={20} className="text-amber-400" fill="currentColor" /></div>
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all cursor-default"><Award size={20} className="text-green-400" /></div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <h5 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-10">Direct Connect</h5>
              <div className="space-y-8">
                <a href={`tel:${DARSHAN_CONTACT.phone}`} className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-green-400 group-hover:bg-green-600 group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Call Darshan N G</span>
                    <span className="text-xl font-black tracking-tight">{DARSHAN_CONTACT.phone}</span>
                  </div>
                </a>
                <a href={`mailto:${DARSHAN_CONTACT.email}`} className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-green-400 group-hover:bg-green-600 group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <span className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Official Email</span>
                    <span className="text-xl font-black tracking-tight">{DARSHAN_CONTACT.email}</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <h5 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-10">Quick Support</h5>
              <div className="space-y-4">
                <a href={whatsappLink} className="w-full flex items-center justify-between p-6 bg-emerald-500 text-white rounded-[2rem] font-black shadow-lg hover:bg-emerald-600 hover:-translate-y-1 transition-all">
                  <span>Start WhatsApp Chat</span>
                  <MessageCircle size={24} />
                </a>
                <a href="#booking" className="w-full flex items-center justify-between p-6 bg-white/5 text-white rounded-[2rem] font-black border border-white/10 hover:bg-white/10 transition-all">
                  <span>Book Site Inspection</span>
                  <Calendar size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-32 pt-16 border-t border-white/5 text-center">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.4em]">
              © {new Date().getFullYear()} SECURE INDIA PEST CONTROL PVT LTD • BENGALURU
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Floating Lead Buttons */}
      <div className="fixed bottom-8 left-0 w-full px-6 flex justify-center space-x-3 md:hidden z-50">
        <a href={`tel:${DARSHAN_CONTACT.phone}`} className="flex-1 flex items-center justify-center space-x-3 bg-slate-900 text-white py-4 rounded-2xl font-black shadow-2xl">
          <Phone size={18} />
          <span>Call Sales</span>
        </a>
        <a href={whatsappLink} className="flex-1 flex items-center justify-center space-x-3 bg-emerald-500 text-white py-4 rounded-2xl font-black shadow-2xl">
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default App;
