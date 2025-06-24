"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: 9,
      period: "per month",
      description: "Perfect for occasional use",
      features: [
        "5 PDF summaries per month",
        "Standard processing speed",
        "Email support",
      ],
      buttonText: "Buy Now",
      popular: false,
    },
    {
      name: "Pro",
      price: 19,
      period: "per month",
      description: "For professionals and teams",
      features: [
        "Unlimited PDF summaries",
        "Priority processing",
        "24/7 priority support",
        "Multi-format Export",
      ],
      buttonText: "Buy Now",
      popular: true,
    },
  ];

  return (
    <section className="py-16 px-4 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-full mb-5">
            <span className="text-xl">🏆</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Pricing
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`p-6 text-center transition-all duration-300 hover:scale-105 animate-fade-in ${
                plan.popular
                  ? "border-2 border-pink-500 shadow-xl bg-gradient-to-b from-white to-pink-50 dark:from-gray-900 dark:to-pink-900"
                  : "border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl bg-white dark:bg-gray-900"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-medium px-3 py-1 rounded-full inline-block mb-3">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1.5">
                {plan.name}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {plan.description}
              </p>

              <div className="mb-5">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${plan.price}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-1.5">
                  {plan.period}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center space-x-2.5 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full py-2.5 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                    : "bg-white text-gray-900 dark:bg-gray-100 dark:text-black border-2 border-gray-900 dark:border-gray-300 hover:bg-gray-900 hover:text-white"
                }`}
              >
                {plan.buttonText} →
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
