import React from "react";

const features = [
{
  id: 1,
  color: "bg-orange-100 text-orange-500",
  title: "Connect bank account",
  desc: "Securely link your bank to track spending in real time.",
},
{
  id: 2,
  color: "bg-purple-100 text-purple-500",
  title: "Set budgets",
  desc: "Create smart budgets and stay on top of your goals.",
},
{
  id: 3,
  color: "bg-teal-100 text-teal-500",
  title: "Track expenses",
  desc: "See where your money goes with clear insights.",
},
{
  id: 4,
  color: "bg-yellow-100 text-yellow-500",
  title: "Save smarter",
  desc: "Plan ahead and grow your savings effortlessly.",
},
];

const FeaturesSection = () => {
  return (
    <section className="w-full h-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        <p className="text-indigo-600 font-medium">Main features</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          The app will track your <br /> transaction and savings
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`rounded-2xl p-6 shadow-sm ${feature.color}`}
            >
              <h3 className="text-2xl font-bold">{feature.id}.</h3>
              <h4 className="mt-2 font-semibold text-gray-900">
                {feature.title}
              </h4>
              <p className="mt-2 text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
