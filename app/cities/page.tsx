'use client';

import { MapPin, Building2, Map, Percent, ArrowRight, MessageSquare, Globe2, ShieldCheck, Clock } from 'lucide-react';

export default function Cities() {
  const cities = [
    { name: "Karachi", province: "Sindh", coverage: "100%", neighborhoods: 15 },
    { name: "Lahore", province: "Punjab", coverage: "100%", neighborhoods: 12 },
    { name: "Islamabad", province: "Federal", coverage: "100%", neighborhoods: 8 },
    { name: "Rawalpindi", province: "Punjab", coverage: "100%", neighborhoods: 6 },
    { name: "Faisalabad", province: "Punjab", coverage: "95%", neighborhoods: 5 },
    { name: "Multan", province: "Punjab", coverage: "90%", neighborhoods: 4 },
    { name: "Peshawar", province: "KPK", coverage: "100%", neighborhoods: 5 },
    { name: "Quetta", province: "Balochistan", coverage: "85%", neighborhoods: 3 },
    { name: "Hyderabad", province: "Sindh", coverage: "98%", neighborhoods: 4 },
    { name: "Gujranwala", province: "Punjab", coverage: "92%", neighborhoods: 4 },
    { name: "Sialkot", province: "Punjab", coverage: "88%", neighborhoods: 3 },
    { name: "Sargodha", province: "Punjab", coverage: "85%", neighborhoods: 2 },
    { name: "Abbottabad", province: "KPK", coverage: "90%", neighborhoods: 2 },
    { name: "Mirpur Khas", province: "Sindh", coverage: "80%", neighborhoods: 2 },
    { name: "Jhang", province: "Punjab", coverage: "82%", neighborhoods: 2 },
  ];

  const regions = [
    { region: "Sindh", cities: ["Karachi", "Hyderabad", "Mirpur Khas"], icon: <Map className="w-5 h-5" /> },
    { region: "Punjab", cities: ["Lahore", "Faisalabad", "Multan", "Rawalpindi", "Gujranwala", "Sialkot", "Sargodha", "Jhang"], icon: <Building2 className="w-5 h-5" /> },
    { region: "KPK", cities: ["Peshawar", "Abbottabad"], icon: <MapPin className="w-5 h-5" /> },
    { region: "Federal", cities: ["Islamabad"], icon: <Globe2 className="w-5 h-5" /> },
    { region: "Balochistan", cities: ["Quetta"], icon: <Map className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-green-100 selection:text-green-900">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-32 -left-24 w-72 h-72 bg-orange-50 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 font-medium text-sm mb-6 shadow-sm border border-green-100">
            <Globe2 className="w-4 h-4" />
            <span>Available in 50+ Cities Nationwide</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Our Coverage <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
              Across Pakistan
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            From major metropolitan hubs to growing urban centers, SahulatKaar is expanding rapidly to bring convenience to your doorstep.
          </p>
        </div>
      </section>

      {/* CITIES GRID SECTION */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Active Cities</h2>
              <p className="text-slate-600 text-lg">Detailed coverage metrics for our primary operational areas.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cities.map((city, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-100 hover:border-green-200 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Decorative background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-green-700 transition-colors">{city.name}</h3>
                      <div className="flex items-center gap-1.5 text-sm text-slate-500 mt-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{city.province}</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                      <Building2 className="w-5 h-5 text-slate-400 group-hover:text-green-600 transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-1 uppercase tracking-wider">
                        <Percent className="w-3 h-3" />
                        Coverage
                      </div>
                      <p className="text-lg font-bold text-slate-900">{city.coverage}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-1 uppercase tracking-wider">
                        <Map className="w-3 h-3" />
                        Areas
                      </div>
                      <p className="text-lg font-bold text-slate-900">{city.neighborhoods}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGIONS SECTION */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Regional Distribution</h2>
            <p className="text-slate-600 text-lg">Browse our operational presence by province and territory.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {regions.map((region, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all duration-300 hover:bg-white"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-green-100 text-green-700 flex items-center justify-center">
                    {region.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {region.region}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {region.cities.map((city, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-green-500 transition-colors" />
                      <span className="font-medium text-sm">{city}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { value: "50+", label: "Cities Covered", icon: <Globe2 className="w-6 h-6" /> },
              { value: "100+", label: "Neighborhoods", icon: <Map className="w-6 h-6" /> },
              { value: "5", label: "Provinces", icon: <MapPin className="w-6 h-6" /> },
              { value: "24/7", label: "Availability", icon: <Clock className="w-6 h-6" /> }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-green-400 mb-4 backdrop-blur-sm">
                  {stat.icon}
                </div>
                <p className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">{stat.value}</p>
                <p className="text-slate-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON / CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-12 flex flex-col justify-center bg-gradient-to-br from-green-50 to-white">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Can't find your city?</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  We are constantly expanding. Let us know where you need our services, and we'll prioritize your area.
                </p>
                <a
                  href="https://wa.me/923261440088?text=Mera%20city%20[city%20name]%20hai.%20Kya%20aaj%20services%20de%20sakte%20ho?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3.5 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 w-fit"
                >
                  Request Your City
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="p-10 md:p-12 flex flex-col justify-center bg-slate-900 text-white relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl" />
                
                <h2 className="text-3xl font-bold mb-4 tracking-tight relative z-10">Ready to start?</h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed relative z-10">
                  If you're in one of our active cities, get help with your tasks right away. No delays, no hassle.
                </p>
                <a
                  href="https://wa.me/923261440088?text=Assalam%20u%20Alaikum%20-%20I%20need%20help%20with%20tasks%20in%20Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-slate-900 px-6 py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 w-fit relative z-10"
                >
                  <MessageSquare className="w-5 h-5" />
                  WhatsApp Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
