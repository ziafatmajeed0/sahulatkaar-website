'use client';

import { Mail, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    taskDescription: ''
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const whatsappMessage = `Assalam u Alaikum! Mera naam ${formData.name} hai. ${formData.city} se hoon. Mujhe ye kaam karwana hai: ${formData.taskDescription}`;
    window.open(`https://wa.me/923261440088?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <div>
      {/* HERO */}
      <section className="bg-orange-50 text-gray-900 py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us / Order Now
          </h1>
          <p className="text-xl text-gray-700">
            Apne kaam ko SahulatKaar ke hawale kar dain 🚀
          </p>
        </div>
      </section>

      {/* QUICK CONTACT */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Bilkul Quick Contact Karain</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 text-center hover:shadow-lg transition cursor-pointer" 
              onClick={() => window.open('https://wa.me/923261440088', '_blank')}>
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Sabse taez aur easiest!</p>
              <p className="text-lg font-bold text-primary">+92 326 1440088</p>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg p-6 text-center hover:shadow-lg transition cursor-pointer"
              onClick={() => window.location.href = 'tel:+923261440088'}>
              <Phone className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Direct Call</h3>
              <p className="text-gray-600 mb-4">Turant baat kar le</p>
              <p className="text-lg font-bold text-secondary">+92 326 1440088</p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-6 text-center hover:shadow-lg transition cursor-pointer"
              onClick={() => window.location.href = 'mailto:help.sahulatkaar@gmail.com'}>
              <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Detailed message bhejo</p>
              <p className="text-lg font-bold text-accent">help.sahulatkaar@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM & INFO */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* FORM */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Apne Details Bhejo</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Aapka Naam
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ahmed Ali"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ahmed@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Kaun Se City Mein Kaam Hai?
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Karachi, Dubai, etc."
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Kya Kaam Hai? (Bilkul Detail Se)
                  </label>
                  <textarea
                    name="taskDescription"
                    value={formData.taskDescription}
                    onChange={handleChange}
                    placeholder="Jitna detail dunga utna acha... examples: property document submit karna hai, Amma ke liye medicine lani hai, etc."
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-green-700 transition transform hover:scale-105"
                >
                  💬 WhatsApp PE Bhejo
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Aapka data bilkul safe hai - sirf apne kaam ke liye use hoga!
              </p>
            </div>

            {/* INFO */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex gap-4 mb-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Timing</h3>
                    <p className="text-gray-600">Monday - Sunday | 8am - 10pm</p>
                    <p className="text-gray-600">Emergency? 24/7 WhatsApp available!</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex gap-4 mb-4">
                  <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Coverage</h3>
                    <p className="text-gray-600">50+ cities across Pakistan</p>
                    <p className="text-gray-600">Aapka city available nahi? Puchhte rahiye!</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Process Summary</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">1.</span>
                    <span className="text-gray-700">WhatsApp message ya call karo</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">2.</span>
                    <span className="text-gray-700">Apna kaam detail kariyo</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">3.</span>
                    <span className="text-gray-700">Quote + payment method batayein</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">4.</span>
                    <span className="text-gray-700">Kaam immediately start</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">5.</span>
                    <span className="text-gray-700">Updates + Completion! 🎉</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary rounded-lg p-6">
                <p className="text-gray-700 font-semibold mb-2">💡 Pro Tip:</p>
                <p className="text-sm text-gray-600">
                  Jitna detail in do form mein, utna jaldi aur better quote milega! Photos, documents, links - sab bhej do agar possible ho!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Aksar Pooche Jane Wale Sawal</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Q: Response Time Kitni Hoti Hai?
              </h3>
              <p className="text-gray-600">
                A: Zyada tar cases mein 15-30 minutes mein response mil jata hai. Raat ko thora slow ho skta hai par morning tak zaroor!
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Q: Payment Kaise Hota Hai?
              </h3>
              <p className="text-gray-600">
                A: WhatsApp pay, Jazz cash, Easy Paisa, Bank transfer - jo easy ho aapko! Advance ya half payment, flexible karte hain.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Q: Agar Kaam Proper Nahi Hua?
              </h3>
              <p className="text-gray-600">
                A: Guarantee dete hain - agar kaam sahi nahi hour to paise waapis + re-do free! 100% satisfaction guarantee.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Q: Mera City Cover Nahi Hota?
              </h3>
              <p className="text-gray-600">
                A: Kuch cases mein nearby city se help kar skte hain! Ya agle month tak launch ho skta hai. Message karke puchhh lo!
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Q: Mera Data Secure Rahega?
              </h3>
              <p className="text-gray-600">
                A: Bilkul! Hum aapka personal info sirf aapke kaam ke liye use karte hain. Privacy guaranteed!
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Q: Emergency Mein Kya Karte Ho?
              </h3>
              <p className="text-gray-600">
                A: 24/7 WhatsApp available! Urgent cases priority le skte hain. Premium rate ho skta hai par handle kar denge!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 hero-gradient text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ab Aur Delay Mat Karo!
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Ek simple message - sab kuch ho jayega! ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/923261440088?text=Assalam%20u%20Alaikum%20-%20I%20need%20help%20with%20tasks%20in%20Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105"
            >
              💬 WhatsApp Message Karain (Best)
            </a>
            <a
              href="tel:+923261440088"
              className="inline-block bg-secondary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition transform hover:scale-105"
            >
              ☎️ Direct Call Karain
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
