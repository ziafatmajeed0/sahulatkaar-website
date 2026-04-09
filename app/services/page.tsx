'use client';

export default function Services() {
  const serviceCategories = [
    {
      category: "📄 Document Services",
      color: "from-blue-500 to-blue-600",
      items: [
        "NADRA registration & updates",
        "Property documents",
        "Tax forms & returns",
        "Government office submissions",
        "Certificate applications",
        "Passport & visa related tasks"
      ]
    },
    {
      category: "🛒 Shopping & Errands",
      color: "from-orange-500 to-orange-600",
      items: [
        "Market shopping",
        "Store/mall purchases",
        "Online order pickups",
        "Bill payments",
        "Utility bill submission",
        "Home delivery coordination"
      ]
    },
    {
      category: "💊 Healthcare",
      color: "from-green-500 to-green-600",
      items: [
        "Medicine pickup from pharmacy",
        "Hospital document collection",
        "Doctor's appointment scheduling",
        "Lab reports collection",
        "Medical certificate assistance",
        "Emergency healthcare coordination"
      ]
    },
    {
      category: "🏠 Home Services",
      color: "from-red-500 to-red-600",
      items: [
        "Home maintenance coordination",
        "Repair scheduling",
        "Cleaning services arrangement",
        "Utility connections",
        "Rent & property management",
        "Inspection coordination"
      ]
    },
    {
      category: "📊 Business Services",
      color: "from-purple-500 to-purple-600",
      items: [
        "Office tasks",
        "Document scanning & organizing",
        "Banking transactions",
        "Business registration assistance",
        "Contract preparation",
        "Vendor coordination"
      ]
    },
    {
      category: "⚙️ Custom Tasks",
      color: "from-indigo-500 to-indigo-600",
      items: [
        "Anything you need!",
        "Multiple tasks coordination",
        "Event arrangement help",
        "Appointment scheduling",
        "Research & information",
        "Any local service in Pakistan"
      ]
    }
  ];

  const processSteps = [
    "Tell us what you need",
    "Get a quote",
    "Approve & make payment",
    "Work starts immediately",
    "Daily updates & photos",
    "Task completion with proof"
  ];

  return (
    <div>
      {/* HERO */}
      <section className="bg-orange-50 text-gray-900 py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Humara Services
          </h1>
          <p className="text-xl text-gray-700">
            Sab kya kar sakte hain - sab kuch ek jagah
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105 duration-300 bg-gradient-to-br ${service.color} text-white`}
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-6">{service.category}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-lg mt-1">✓</span>
                        <span className="text-sm opacity-95">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Koi bhi Service Kaisy Use Karain?</h2>
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING INFO */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Pricing Kya Hoti Hai?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Simple Services</h3>
              <p className="text-gray-600 mb-4">Shopping, errands, basic tasks</p>
              <p className="text-3xl font-bold text-primary mb-2">500+</p>
              <p className="text-sm text-gray-600">Actual cost + service fee</p>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-secondary mb-4">Medium Services</h3>
              <p className="text-gray-600 mb-4">Healthcare, appointments, coordination</p>
              <p className="text-3xl font-bold text-secondary mb-2">1,000+</p>
              <p className="text-sm text-gray-600">Depends on task complexity</p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-accent mb-4">Complex Services</h3>
              <p className="text-gray-600 mb-4">Documents, multiple tasks, special coordination</p>
              <p className="text-3xl font-bold text-accent mb-2">Custom</p>
              <p className="text-sm text-gray-600">Get exact quote for your task</p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center border-2 border-gray-200">
            <p className="text-lg text-gray-700 mb-4">
              💡 <span className="font-bold">No hidden charges!</span> Jo quote denge wahi pay karna hoga. Plus jo actual kharch hoga (agar kuch hoga) wo alag mention hoga.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Apka Kaam Kaun Sa Hai?
          </h2>
          <p className="text-lg mb-8 text-green-100">
            Batain, hum handle kar denge! ⚡
          </p>
          <a
            href="https://wa.me/923261440088?text=Assalam%20u%20Alaikum%20-%20Mujhe%20ye%20service%20chahiye:%20[apna%20kaam%20likhen]"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105"
          >
            💬 WhatsApp Message Karain
          </a>
        </div>
      </section>
    </div>
  );
}
