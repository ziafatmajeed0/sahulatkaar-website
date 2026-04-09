'use client';

import Image from 'next/image';
import { CheckCircle, Users, Zap, Shield, MessageCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  const testimonials = [
    {
      name: "Ahmed Ali",
      city: "Dubai",
      text: "Mera property document handle karna tha. SahulatKaar nay 2 din mein sab kuch complete kar diya!",
      rating: 5
    },
    {
      name: "Fatima Khan",
      city: "USA",
      text: "Amma ke liye medicine door karna tha. Bilkul trustworthy service hai!",
      rating: 5
    },
    {
      name: "Hassan Raza",
      city: "Saudi Arabia",
      text: "Business documents ke liye itni mushkil tha. Ab problem nahi hai!",
      rating: 5
    }
  ];

  const painPoints = [
    {
      icon: <Users className="w-12 h-12 text-secondary" />,
      title: "Koi Trusted Banda Nahi",
      description: "Kaise samjhein kahan apna kaam theek ho raha hai?"
    },
    {
      icon: <Zap className="w-12 h-12 text-secondary" />,
      title: "Time Nahi Hota",
      description: "Office mein busy, documents tak nahi pahunch sakte"
    },
    {
      icon: <Shield className="w-12 h-12 text-secondary" />,
      title: "Delay & Risk",
      description: "Government offices mein delay aur uncertainty"
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-secondary" />,
      title: "No Updates",
      description: "Kaam ka status clear nahi hota"
    }
  ];

  const steps = [
    { num: "1", title: "Message Karain", description: "WhatsApp pe apna kaam batain" },
    { num: "2", title: "Hum Sambhalte Hain", description: "Hum task handle karte hain" },
    { num: "3", title: "Relax Karain", description: "Kaam complete, updates milte rahe" }
  ];

  const services = [
    { icon: "📄", title: "Document Handling", description: "NADRA, property, tax work" },
    { icon: "🛒", title: "Shopping", description: "Market errands & delivery" },
    { icon: "💊", title: "Medicine", description: "Medicine pickup & delivery" },
    { icon: "⚙️", title: "Custom Tasks", description: "Har type ka kaam" }
  ];

  return (
    <div>

      {/* HERO SECTION */}
      <section className="bg-white pb-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="space-y-6">

              <div className="inline-flex bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
                You Rest. We Run.
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Pakistan mein kaam atka hua hai? <br />
                <span className="text-primary">
                  Ab aap ko travel karne ki zarurat nahi.
                </span>
              </h1>

              <p className="text-lg text-gray-600">
                SahulatKaar aap ke liye Pakistan mein har wo kaam karta hai
                jin ke liye normally aap ko khud jana parta hai.
                <br />
                <span className="font-semibold">
                  Time bhi save, travel bhi avoid.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/923261440088"
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold"
                >
                  <MessageCircle size={20} />
                  Order on WhatsApp
                </a>

                <a
                  href="#how-it-works"
                  className="flex items-center justify-center gap-2 border border-gray-300 px-6 py-3 rounded-lg text-lg font-semibold"
                >
                  <ArrowRight size={18} />
                  How it Works
                </a>
              </div>

              <div className="flex gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" />
                  Trusted by overseas Pakistanis
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="text-yellow-500" />
                  Fast & reliable
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative hover:scale-105 transition-all duration-300">
              <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30"></div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 relative">
                <Image
                  src="/hero-image.png"
                  alt="SahulatKaar"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute top-4 left-4 bg-white shadow-md px-3 py-1 rounded-full text-sm z-10">
                📍 Aap Wahan – Relax Karein
              </div>
              <div className="absolute bottom-4 right-4 bg-white shadow-md px-3 py-1 rounded-full text-sm z-10">
                ✔ Hum Yahan – Kaam Karein
              </div>
            </div>

          </div>

          {/* STATS BAR */}
          <div className="mt-12 bg-white shadow-lg rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

            <div>
              <p className="font-bold text-lg">24-48 Hours</p>
              <p className="text-sm text-gray-500">Fast Task Completion</p>
            </div>

            <div>
              <p className="font-bold text-lg">100% Trusted</p>
              <p className="text-sm text-gray-500">Secure & Reliable</p>
            </div>

            <div>
              <p className="font-bold text-lg">All Major Cities</p>
              <p className="text-sm text-gray-500">Lahore, Karachi & more</p>
            </div>

          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom grid md:grid-cols-4 gap-6">
          {painPoints.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              {p.icon}
              <h3 className="font-bold mt-4">{p.title}</h3>
              <p className="text-sm text-gray-600">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STEPS */}
      <section id="how-it-works" className="py-20 text-center">
        <div className="container-custom grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i}>
              <div className="text-2xl font-bold text-primary">{s.num}</div>
              <h3 className="font-bold">{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom grid md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="font-bold">{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}