// app/components/FaqSection.tsx
"use client";

import { useState } from "react";

const customerFaqs = [
  {
    question: "What kind of services can I book?",
    answer:
      "You can book services such as plumbing, electrical repairs, carpentry, appliance servicing, and more through our platform.",
  },
  {
    question: "How do I book a service?",
    answer:
      "Simply select the type of service, pick a convenient date and time, and confirm your booking through our website or app.",
  },
  {
    question: "Are your professionals background-verified?",
    answer:
      "Yes, all our professionals undergo a thorough background check and skill assessment before being onboarded.",
  },
  {
    question: "Can I reschedule or cancel a service?",
    answer:
      "Absolutely. You can reschedule or cancel a booking from your dashboard. Just ensure it’s done at least 12 hours in advance to avoid cancellation charges.",
  },
  {
    question: "What if I’m not satisfied with the service?",
    answer:
      "Customer satisfaction is our priority. If you are not satisfied, we offer a rework or refund based on our refund policy.",
  },
  {
    question: "How are service charges calculated?",
    answer:
      "Prices are either fixed for specific services or estimated after an inspection visit by the professional.",
  },
  {
    question: "Do I need to provide any tools or materials?",
    answer:
      "No, our service providers come fully equipped with the necessary tools. If any materials are needed, they’ll inform you during the visit.",
  },
  {
    question: "Is it safe to let professionals into my home?",
    answer:
      "Yes, we ensure all professionals follow strict safety and hygiene protocols, including wearing masks and ID badges.",
  },
  {
    question: "How can I pay for the services?",
    answer:
      "You can pay online via UPI, debit/credit cards, or choose cash on delivery after the service is completed.",
  },
  {
    question: "Do you offer any service warranty?",
    answer:
      "Yes, most services come with a warranty period ranging from 7 to 30 days, depending on the service type.",
  },
];

const professionalFaqs = [
  {
    question: "How can I register as a service professional?",
    answer:
      "You can register on our platform by filling out the signup form, uploading your ID proof, work experience, and areas of expertise. Once verified, you’ll be added to our network.",
  },
  {
    question: "Is there a registration fee to join?",
    answer:
      "No, registration is completely free. However, you must meet our quality standards and verification requirements to be accepted.",
  },
  {
    question: "How do I receive service requests?",
    answer:
      "You’ll receive requests through our partner mobile app. You can accept or reject based on your availability.",
  },
  {
    question: "Can I choose the areas I want to work in?",
    answer:
      "Yes, during registration, you can select your preferred working zones, and we’ll match you with customers accordingly.",
  },
  {
    question: "When will I get paid for completed services?",
    answer:
      "Payments are processed daily or weekly based on your preference, and you’ll receive payments directly to your bank account.",
  },
  {
    question: "What if a customer is not available during the scheduled time?",
    answer:
      "You can report a no-show directly in the app, and our support team will handle it and adjust your schedule accordingly.",
  },
  {
    question: "Do I need to carry my own tools?",
    answer:
      "Yes, professionals are expected to bring their own tools. We also offer discounted tool kits for new joiners.",
  },
  {
    question: "Can I get help with technical training?",
    answer:
      "Yes, we provide regular upskilling workshops and access to online resources to help you grow your skills.",
  },
  {
    question: "What if I face an issue during service?",
    answer:
      "You can contact our 24x7 support via the app, and we’ll assist you immediately.",
  },
  {
    question: "Is there any performance review system?",
    answer:
      "Yes, customer ratings and punctuality affect your visibility. Consistently high performers get priority bookings and bonuses.",
  },
];

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState<"customers" | "professionals">(
    "customers"
  );
  const faqs = activeTab === "customers" ? customerFaqs : professionalFaqs;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab("customers")}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            activeTab === "customers"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          For Customers
        </button>
        <button
          onClick={() => setActiveTab("professionals")}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            activeTab === "professionals"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          For Professionals
        </button>
      </div>

      <div className="grid gap-4">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm transition duration-200 ease-in-out hover:shadow-md"
          >
            <h3 className="font-semibold text-lg mb-2 text-blue-900">
              {faq.question}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
