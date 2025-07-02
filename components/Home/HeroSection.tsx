"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  const words = ["Summary", "Sumario"];
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (deleting) {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!deleting && charIndex === currentWord.length) {
        setTimeout(() => setDeleting(true), 1200); // pause before delete
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <section className="relative pb-14 pt-32 px-4 transition-colors duration-300 overflow-hidden">
      <div className="relative max-w-3xl mx-auto text-center animate-fade-in">
        <div className="inline-flex cursor-pointer items-center space-x-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 rounded-full border border-gray-200 dark:border-gray-700 mb-6 hover:scale-105 transition-transform duration-200">
          <Sparkles className="w-4 h-4 text-pink-500" />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Powered by AI
          </span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-snug">
          Transform PDFs into concise <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {displayText}
            <span className="border-r-2 border-pink-500 animate-pulse ml-1" />
          </span>
        </h1>

        <p className="text-base text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
          Get a beautiful summary reel of the document in seconds.
        </p>

        <Button
          size="sm"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-6 py-5 text-base font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
        >
          Try Sumario ✨
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
