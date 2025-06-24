"use client";

import { Card } from "@/components/ui/card";
import { FileText, Sparkles, Download } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Upload PDF",
      description: "Simply drag and drop your PDF document or click to upload",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: Sparkles,
      title: "AI Analysis",
      description: "Our advanced AI analyzes your document instantly",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Download,
      title: "Get Summary",
      description: "Receive a beautiful summary reel of your document",
      color: "from-blue-500 to-purple-500",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-5 lg:px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-pink-600 dark:text-pink-400 mb-1.5">
            How it works!
          </h3>
          <h2 className="text-lg sm:text-xl lg:text-2xl py-5 font-bold text-gray-900 dark:text-white mb-3">
            Transform any PDF into an easy-to-digest <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              summary in three simple steps
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step) => (
            <Card
              key={step.title}
              className="p-8 sm:p-3 lg:px-10 text-center border-0 shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm"
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 mx-auto mb-3 lg:mt-4 lg:mb-4 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center transform hover:rotate-12 transition-transform duration-300`}
              >
                <step.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-5 lg:h-5 text-white" />
              </div>

              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-1.5">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm lg:mb-4 text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
