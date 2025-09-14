import React from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is this platform about?",
      answer:
        "Our platform helps you track income, expenses, and savings all in one place, giving you full control over your finances.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use bank-level encryption and security practices to ensure your financial data stays safe and private.",
    },
    {
      question: "Do I need to connect my bank account?",
      answer:
        "No, connecting your bank account is optional. You can also add transactions manually if you prefer.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, you get a 30-day free trial with full access to all features before deciding on a plan.",
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
