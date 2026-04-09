'use client';

import { Heart, Target, Users, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Heart className="w-12 h-12 text-rose-500" />,
      title: "Trust First",
      description: "Hum samjhte hain aapka trust meray paas ka un important cheez hai. Sab kuch transparent rakhte hain."
    },
    {
      icon: <Target className="w-12 h-12 text-secondary" />,
      title: "Results Driven",
      description: "Jab kaam dilwate hain tab bilkul complete karwate hain. Half-done nahi, full-done!"
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "People Focused",
      description: "Har customer humara ghaar ke member hai. Sab ko same care aur attention dete hain."
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Fast & Efficient",
      description: "Time is money. Jitmna jaldi possible ho, utna jaldi complete karwate hain - quality sacrifise nahi."
    }
  ];

  const milestones = [
    { year: "2022", achievement: "SahulatKaar Founded" },
    { year: "2023", achievement: "5,000+ Happy Customers" },
    { year: "2024", achievement: "50+ Cities Coverage" },
    { year: "2025", achievement: "10,000+ Monthly Orders" },
  ];

  const team = [
    { name: "Ahmed Khan", role: "Founder & CEO", bio: "Pakistan se overseas opportunity identify karke SahulatKaar banaya" },
    { name: "Fatima Malik", role: "Operations Lead", bio: "Har order ko perfectly execute karta hai" },
    { name: "Hassan Rizvi", role: "Customer Care", bio: "24/7 customers ke liye available rehta hai" },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="bg-orange-50 text-gray-900 py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SahulatKaar Kya Hai?
          </h1>
          <p className="text-xl text-gray-700">
            You Rest. We Run. - Pakistan mein aapka trusted partner
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Humara Story</h2>
              <p className="text-gray-600 mb-4 text-lg">
                Ek tha ek Pakistani overseas living karte hue apne family ke liye Pakistan mein kaam dilwana chhah raha tha. Lekin har baar mushkil aata tha - time nahi, trusted banda nahi, government offices mein chakkar!
              </p>
              <p className="text-gray-600 mb-4 text-lg">
                Phir socha - agar hum ek platform ban jayein jahan koi bhi Pakistani apna sab kaam karwa sake - documents, shopping, medicine, anything! 
              </p>
              <p className="text-gray-600 text-lg">
                Aur bas yahi SahulatKaar ka idea tha. Ab hum help kar rahe hain lakh logon ko apna Pakistan ke kaam manage karte hue!
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 border-2 border-primary/30">
              <div className="text-6xl mb-4">🇵🇰</div>
              <p className="text-gray-800 font-semibold text-lg">
                "Pakistan mein jo problem tha, wahi solution ban gaya!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">🎯 Hamara Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Pakistan mein jo physical tasks hain unhe remote se complete karwana - safe, trusted, transparent tarike se. Koi bhi aadmi, koi bhi city, koi bhi time - hum hain!
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-secondary mb-4">👁️ Hamara Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                SahulatKaar banna har Pakistani ka first choice jab kisi ko Pakistan mein kaam karwana hota - bilkul trusted, bilkul efficient, bilkul stress-free!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Humari Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 text-center hover:shadow-lg transition">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Hamara Growth</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
                <p className="text-3xl font-bold text-primary mb-2">{milestone.year}</p>
                <p className="text-gray-700 font-semibold">{milestone.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Humse Kyon?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">✅ Experience</h3>
              <p className="text-gray-600">
                2+ years se SahulatKaar services de rahe hain. 50+ cities, 10,000+ happy customers!
              </p>
            </div>
            <div className="bg-secondary/5 border-l-4 border-secondary rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">✅ Reliability</h3>
              <p className="text-gray-600">
                Jiska kaam dilao, vo bilkul complete hota hai. Koi excuses nahi, bas results!
              </p>
            </div>
            <div className="bg-accent/5 border-l-4 border-accent rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">✅ Transparency</h3>
              <p className="text-gray-600">
                Sab kuch clear rate, daily updates, photos, proofs - kuch hidden nahi!
              </p>
            </div>
            <div className="bg-rose-500/5 border-l-4 border-rose-500 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">✅ Support</h3>
              <p className="text-gray-600">
                24/7 customer support. Koi problem ho to hum sirf message away hain!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hamara Part Ban Jain!
          </h2>
          <p className="text-lg mb-8 text-green-100">
            1000+ customers ka trust, aapka trust bhi lenge 💚
          </p>
          <a
            href="https://wa.me/923261440088?text=Assalam%20u%20Alaikum%20-%20I%20want%20to%20know%20more%20about%20SahulatKaar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105"
          >
            💬 Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
