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
  Zap,
  MapPin,
  UserCheck,
  ShieldAlert
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
    <div className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-200">
                <ShieldCheck size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-slate-900 leading-none">SIPC BENGALURU</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Sales Coordination</span>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#services" className="text-sm font-bold text-slate-600 hover:text-green-600 transition-colors uppercase">Our Solutions</a>
              <a href="#about" className="text-sm font-bold text-slate-600 hover:text-green-600 transition-colors uppercase">Why Us</a>
              <a href="#booking" className="px-6 py-2.5 bg-slate-900 text-white rounded-full font-bold text-sm shadow-xl hover:bg-slate-800 transition-all transform hover:-translate-y-0.5">Book Now</a>
              <a href={`tel:${DARSHAN_CONTACT.phone}`} className="flex items-center space-x-2 text-green-700 font-extrabold px-4 py-2 bg-green-50 rounded-full border border-green-100">
                <Phone size={16} />
                <span>{DARSHAN_CONTACT.phone}</span>
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-900 bg-slate-100 rounded-lg">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white md:hidden animate-in fade-in duration-300">
          <div className="flex flex-col h-full p-8">
            <div className="flex justify-between items-center mb-12">
               <span className="text-2xl font-black tracking-tighter">SIPC</span>
               <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-slate-100 rounded-full"><X size={24} /></button>
            </div>
            <div className="flex flex-col space-y-8 text-3xl font-black text-slate-900">
              <a href="#services" onClick={() => setIsMenuOpen(false)}>Solutions</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>Why Professional?</a>
              <a href="#booking" onClick={() => setIsMenuOpen(false)}>Get Quote</a>
              <a href={`tel:${DARSHAN_CONTACT.phone}`} className="text-green-600">{DARSHAN_CONTACT.phone}</a>
            </div>
            <div className="mt-auto space-y-4">
               <a href={whatsappLink} className="w-full flex items-center justify-center space-x-3 bg-emerald-500 text-white py-5 rounded-2xl font-black">
                 <MessageCircle size={24} />
                 <span>WhatsApp Darshan</span>
               </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50 overflow-hidden bg-dot-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 mb-8">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />)}
                </div>
                <span className="text-[11px] font-extrabold text-slate-600 uppercase tracking-widest">5,000+ Happy Homes in Bengaluru</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-8">
                Expert Pest Control.<br />
                <span className="text-green-600">Zero Stress.</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
                Tired of DIY sprays failing? Connect with <span className="text-slate-900 font-bold border-b-4 border-green-500/30">{DARSHAN_CONTACT.name}</span> for certified SIPC treatments tailored for Bengaluru's climate and building structures.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <a href="#booking" className="flex items-center justify-center space-x-3 px-10 py-5 bg-green-600 text-white rounded-2xl font-black shadow-2xl shadow-green-200 hover:bg-green-700 hover:-translate-y-1 transition-all">
                  <span>Schedule Site Inspection</span>
                  <ArrowRight size={20} />
                </a>
                <a href={`tel:${DARSHAN_CONTACT.phone}`} className="flex items-center justify-center space-x-3 px-10 py-5 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-black hover:bg-slate-50 hover:-translate-y-1 transition-all">
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
              </div>

              <div className="mt-16 flex flex-wrap gap-10 items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-green-600"><ShieldCheck /></div>
                  <div className="text-xs font-black uppercase tracking-widest text-slate-500">Certified<br/>Safe Chem</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-green-600"><Clock /></div>
                  <div className="text-xs font-black uppercase tracking-widest text-slate-500">24-Hour<br/>Turnaround</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-green-600"><Award /></div>
                  <div className="text-xs font-black uppercase tracking-widest text-slate-500">Bayer<br/>Approved</div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 mt-20 lg:mt-0 relative">
              <div className="relative z-10 p-4 bg-white rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern Cleaning" 
                  className="w-full h-[500px] object-cover rounded-[2.5rem]"
                />
                <div className="absolute top-10 -left-10 p-6 glass-card rounded-2xl shadow-xl max-w-[200px] animate-float">
                   <div className="flex text-amber-400 mb-2">
                     {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                   </div>
                   <p className="text-xs font-bold text-slate-700">"SIPC cleared my termite issue in one visit. Highly recommended!"</p>
                   <p className="text-[10px] font-black uppercase text-slate-400 mt-2">— HSR Layout Client</p>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-200/40 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
            <div className="max-w-2xl">
              <h4 className="text-green-600 font-black uppercase tracking-[0.2em] text-xs mb-4">Our Specializations</h4>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">Advanced Defense for<br/>Your Property.</h2>
            </div>
            <p className="mt-6 md:mt-0 text-slate-500 max-w-sm font-medium">
              We don't just spray; we strategize. Each service is coordinated by Darshan to ensure maximum efficacy and safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="group p-8 rounded-[2rem] border border-slate-100 bg-slate-50 hover:bg-white hover:border-green-200 hover:shadow-2xl hover:shadow-green-100 transition-all duration-500">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm mb-8 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black mb-4 group-hover:text-green-700 transition-colors">{service.title}</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed line-clamp-3">{service.problem}</p>
                <div className="pt-6 border-t border-slate-200/50 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Professional Grade</span>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Professional Section */}
      <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
            <div>
               <h4 className="text-green-400 font-black uppercase tracking-[0.2em] text-xs mb-6">The SIPC Sales Protocol</h4>
               <h2 className="text-4xl sm:text-5xl font-black mb-8 leading-tight tracking-tight">Why direct coordination<br/>matters.</h2>
               
               <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-green-400"><UserCheck size={28} /></div>
                    <div>
                      <h5 className="text-xl font-bold mb-2">Senior Consultation</h5>
                      <p className="text-slate-400 text-sm leading-relaxed">No dealing with call centers. Darshan N G handles your account from inquiry to execution, ensuring clear communication.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-green-400"><ShieldAlert size={28} /></div>
                    <div>
                      <h5 className="text-xl font-bold mb-2">Technical Mapping</h5>
                      <p className="text-slate-400 text-sm leading-relaxed">We map nesting hotspots and risk zones before starting any treatment. Science-backed elimination, not just temporary fixes.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-green-400"><MapPin size={28} /></div>
                    <div>
                      <h5 className="text-xl font-bold mb-2">Hyper-Local Experts</h5>
                      <p className="text-slate-400 text-sm leading-relaxed">Our Bengaluru team knows the specific issues of areas like Indiranagar, Whitefield, and Electronic City.</p>
                    </div>
                  </div>
               </div>
            </div>
            
            <div className="mt-20 lg:mt-0">
               <div className="bg-white/5 border border-white/10 p-10 md:p-14 rounded-[3rem] backdrop-blur-md">
                  <h3 className="text-2xl font-black mb-8">Service Commitments</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                       <CheckCircle2 className="text-green-400" />
                       <h6 className="font-bold">Eco-Friendly</h6>
                       <p className="text-xs text-slate-400">Safe for kids and pets. No toxic residue.</p>
                    </div>
                    <div className="space-y-4">
                       <Zap className="text-green-400" />
                       <h6 className="font-bold">Fast Response</h6>
                       <p className="text-xs text-slate-400">Booking confirmed within 15 minutes.</p>
                    </div>
                    <div className="space-y-4">
                       <Award className="text-green-400" />
                       <h6 className="font-bold">Certified Techs</h6>
                       <p className="text-xs text-slate-400">Background verified & trained professionals.</p>
                    </div>
                    <div className="space-y-4">
                       <Calendar className="text-green-400" />
                       <h6 className="font-bold">Flexible Slot</h6>
                       <p className="text-xs text-slate-400">Weekend & After-hours service available.</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto bg-white rounded-[3.5rem] shadow-2xl shadow-slate-200 overflow-hidden border border-slate-100 flex flex-col md:flex-row">
            
            <div className="md:w-5/12 p-10 md:p-16 bg-green-600 text-white flex flex-col justify-between relative overflow-hidden">
               <ShieldCheck size={200} className="absolute -bottom-10 -right-10 text-white/10" />
               <div className="relative z-10">
                 <h2 className="text-4xl font-black mb-6 tracking-tight">Claim Your<br/>Free Inspection.</h2>
                 <p className="text-green-50 mb-10 font-medium">I'll personally review your request and assign our best lead technician for your area.</p>
                 <div className="space-y-6">
                    <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-2xl border border-white/10">
                       <Phone className="flex-shrink-0" />
                       <span className="font-black">{DARSHAN_CONTACT.phone}</span>
                    </div>
                    <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-2xl border border-white/10">
                       <Mail className="flex-shrink-0" />
                       <span className="font-black text-sm break-all">{DARSHAN_CONTACT.email}</span>
                    </div>
                 </div>
               </div>
               <div className="mt-12 text-[10px] font-black uppercase tracking-[0.3em] opacity-80 relative z-10">
                 SIPC India Pvt Ltd • Official Channel
               </div>
            </div>

            <div className="md:w-7/12 p-10 md:p-16">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Lead Sent!</h3>
                  <p className="text-slate-500 text-sm font-medium">Darshan will call you from {DARSHAN_CONTACT.phone} shortly.</p>
                  <button onClick={() => setFormSubmitted(false)} className="mt-8 text-green-600 font-bold hover:underline">Send another request</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Name</label>
                       <input 
                         type="text" name="name" required value={formData.name} onChange={handleInputChange}
                         placeholder="e.g. Anand Kumar"
                         className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-green-500 focus:bg-white rounded-2xl outline-none transition-all font-bold"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                       <input 
                         type="tel" name="mobile" required value={formData.mobile} onChange={handleInputChange}
                         placeholder="+91..."
                         className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-green-500 focus:bg-white rounded-2xl outline-none transition-all font-bold"
                       />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Location / Layout</label>
                     <input 
                       type="text" name="location" required value={formData.location} onChange={handleInputChange}
                       placeholder="e.g. Koramangala 4th Block"
                       className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-green-500 focus:bg-white rounded-2xl outline-none transition-all font-bold"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Type of Infestation</label>
                     <select 
                       name="pestProblem" required value={formData.pestProblem} onChange={handleInputChange}
                       className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-green-500 focus:bg-white rounded-2xl outline-none transition-all font-bold appearance-none cursor-pointer"
                     >
                       <option value="">Select Service</option>
                       {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                       <option value="General AMC">General AMC / Maintenance</option>
                       <option value="Other">Custom Query</option>
                     </select>
                  </div>
                  <button type="submit" className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-lg shadow-2xl hover:bg-slate-800 hover:-translate-y-1 transition-all flex items-center justify-center space-x-3">
                    <span>Submit and Request Call</span>
                    <ChevronRight size={20} />
                  </button>
                  <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    No spam. We respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-32 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-8">
                 <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white"><ShieldCheck size={16} /></div>
                 <span className="text-lg font-black tracking-tighter">SIPC INDIA</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6">
                Leading Bengaluru's pest control industry with advanced technology and professional coordination.
              </p>
              <div className="flex gap-4">
                 {[1,2,3].map(i => <div key={i} className="w-10 h-10 bg-slate-100 rounded-xl" />)}
              </div>
            </div>
            
            <div className="col-span-1">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Quick Links</h5>
              <ul className="space-y-4 text-sm font-bold text-slate-600">
                <li><a href="#services" className="hover:text-green-600 transition-colors">Our Services</a></li>
                <li><a href="#about" className="hover:text-green-600 transition-colors">Why SIPC Professional</a></li>
                <li><a href="#booking" className="hover:text-green-600 transition-colors">Site Inspection</a></li>
                <li><a href={whatsappLink} className="hover:text-green-600 transition-colors">WhatsApp Desk</a></li>
              </ul>
            </div>

            <div className="col-span-1">
               <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Direct Contact</h5>
               <div className="space-y-4">
                  <p className="text-sm font-black text-slate-900">{DARSHAN_CONTACT.name}</p>
                  <p className="text-[11px] font-bold text-green-600 uppercase tracking-widest">{DARSHAN_CONTACT.designation}</p>
                  <div className="flex flex-col gap-2 pt-4">
                    <a href={`tel:${DARSHAN_CONTACT.phone}`} className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors flex items-center space-x-2">
                       <Phone size={14} />
                       <span>{DARSHAN_CONTACT.phone}</span>
                    </a>
                    <a href={`mailto:${DARSHAN_CONTACT.email}`} className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors flex items-center space-x-2">
                       <Mail size={14} />
                       <span>{DARSHAN_CONTACT.email}</span>
                    </a>
                  </div>
               </div>
            </div>

            <div className="col-span-1">
               <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Service Areas</h5>
               <p className="text-xs text-slate-500 leading-relaxed font-medium">
                 HSR Layout, Koramangala, Indiranagar, Whitefield, Electronic City, Jayanagar, Bannerghatta, and all major areas in Bengaluru.
               </p>
               <div className="mt-6 p-4 bg-green-50 rounded-2xl border border-green-100 flex items-center space-x-3">
                  <MapPin className="text-green-600" size={18} />
                  <span className="text-[10px] font-black uppercase text-green-700">HQ: Bengaluru 560016</span>
               </div>
            </div>
          </div>
          
          <div className="mt-20 pt-10 border-t border-slate-50 text-center">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">
               © {new Date().getFullYear()} DARSHAN N G • SIPC SALES & COORDINATION • LEAD GEN PORTAL
             </p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Footer Bar */}
      <div className="fixed bottom-0 left-0 w-full md:hidden z-[60] p-4 bg-white/90 backdrop-blur-xl border-t border-slate-100 shadow-[0_-10px_30px_rgba(0,0,0,0.08)]">
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