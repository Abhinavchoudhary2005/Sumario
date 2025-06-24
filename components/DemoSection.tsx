"use client";

import { Card } from "@/components/ui/card";
import { CheckCircle, FileText } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="py-20 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center justify-center w-11 h-11 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-800 dark:to-pink-800 rounded-full mb-4 hover:scale-105 transition-transform duration-200">
            <FileText className="w-6 h-6 text-purple-600 dark:text-purple-300" />
          </div>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Watch how Sumario transforms{" "}
            <span className="text-purple-600 dark:text-purple-400">
              this Next.js course PDF
            </span>{" "}
            into an easy-to-read summary!
          </h2>
        </div>

        <div className="flex justify-center animate-scale-in">
          <Card className="w-full max-w-sm bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="p-4">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg p-3 mb-3">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Quick Overview
                  </h3>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>

                <div className="space-y-2">
                  {[
                    "Comprehensive Next.js 13 course covering everything from fundamentals to advanced deployment strategies",
                    "Server components and client components explained",
                    "Advanced routing patterns and layouts",
                  ].map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2 animate-fade-in"
                      style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-gray-700 dark:text-gray-300">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center space-x-1 text-[10px] text-gray-500 dark:text-gray-400">
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
