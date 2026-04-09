'use client';

import { CheckCircle, AlertCircle, Smartphone, MessageCircle, Clock, Shield } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Message Karain",
      description: "WhatsApp pe message karain ya call karain. Batain apna kaam kya hai. Kuch bhi kar sakte hain!",
      icon: <MessageCircle className="w-16 h-16 text-secondary" />
    },
    {
      number: 2,
      title: "Hum Samjhte Hain",
      description: "Aapka task samajh kar sahi plan banate hain. Zaroorat padi to aur details mange, ya pehlay hi hisaab kar dete hain.",
      icon: <AlertCircle className="w-16 h-16 text-secondary" />
    },
    {
      number: 3,
      title: "Kaam Start",
      description: "Paise ka matter resolve karte hain (agar kuch kharch hoga to). Phir kaam shuru!",
      icon: <Smartphone className="w-16 h-16 text-secondary" />
    },
    {
      number: 4,
      title: "Updates Milte Rahe",
      description: "Kaam chal raha hai to regular updates. Photos/proofs bhejte hain progress ki.",
      icon: <Clock className="w-16 h-16 text-secondary" />
    },
    {
      number: 5,
      title: "Pura Complete",
      description: "Kaam complete hua to final report, documents, photos - sab kuch! Pyre confidence ke saath.",
      icon: <CheckCircle className="w-16 h-16 text-primary" />
    },
    {
      number: 6,
      title: "Aaram Se Soiye",
      description: "Aapka kaam properly complete. Ab koi stress nahi, koi worry nahi!",
      icon: <Shield className="w-16 h-16 text-primary" />
    }
  ];

  const timeline = [
    { time: "5 min", task: "Message + Task Briefing" },
    { time: "30 min", task: "Task Assessment + Quote" },
    { time: "1-2 hours", task: "Payment & Work Start" },
    { time: "Daily", task: "Progress Updates" },
    { time: "2-7 days", task: "Completion" },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="bg-orange-50 text-gray-900 py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kaise Kaam Karte Hain SahulatKaar?
          </h1>
          <p className="text-xl text-gray-700">
            Bilkul simple process - 6 easy steps mein sab kuch complete!
          </p>
        </div>
      </section>

      {/* STEP BY STEP */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-20 w-20 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-block bg-primary text-white rounded-full w-8 h-8 text-center font-bold">
                        {step.number}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Timing Kya Hoti Hai?</h2>
          <p className="section-subtitle text-center">Message se completion tak</p>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    ⏱️
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-1 h-12 bg-primary/30 mt-2"></div>
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-lg font-bold text-primary">{item.time}</p>
                  <p className="text-gray-600">{item.task}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Humse Kyon Kaam Karwain?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-4">✅ Sab Kuch Handle Karte Hain</h3>
              <p className="text-gray-600">Document handling se shopping tak، medicine se custom work - sab kuch!
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-4">🌍 Overseas Friends Ke Liye Best</h3>
              <p className="text-gray-600">Jab aap nahi ho Pakistan mein ta hum ho, aapka sab manage karte hain!</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-4">💬 Bilkul Transparent</h3>
              <p className="text-gray-600">Daily updates, photos, proof - kuch hide nahi! Pura trust basis par kaam karte hain.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-4">⚡ Super Fast</h3>
              <p className="text-gray-600">48 hours mein zyadata tar kaam complete! Sirf message - hum sambhal lete hain.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-4">🔒 100% Secure</h3>
              <p className="text-gray-600">Aapka personal, financial - sab kuch safe! Trusted by 1000+ customers.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-4">💰 Fair Pricing</h3>
              <p className="text-gray-600">Kharcha jo actual lage plus minimal service fee. Koi hidden charges nahi!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ab Samajh Gaye? Chalo Shuru Karte Hain!
          </h2>
          <a
            href="https://wa.me/923261440088?text=Hi%20SahulatKaar,%20mujhe%20apna%20Pakistan%20ka%20kaam%20karwana%20hai.%20Kya%20help%20kar%20sakte%20ho?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105"
          >
            💬 WhatsApp Message Karain - Ab
          </a>
        </div>
      </section>
    </div>
  );
}
