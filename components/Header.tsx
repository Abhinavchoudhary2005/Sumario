"use client";

import { useTheme } from "next-themes";
import { useUser } from "@clerk/nextjs";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Upload, Moon, Sun } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { isLoaded, isSignedIn } = useUser(); // get both

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="w-full px-6 py-4 bg-white/80 dark:bg-gray-900 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <div className="flex items-center space-x-2 hover-scale">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-semibold text-gray-900 dark:text-white">
              Sumario
            </span>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Pricing
          </a>
          {isLoaded && isSignedIn && (
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Your Summaries
            </a>
          )}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          {/* Theme toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>

          <SignedIn>
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
            >
              <Upload className="w-4 h-4" />
              <span>Upload a PDF</span>
            </Button>
            <UserButton />
          </SignedIn>

          {/* Sign In Button */}
          {!isLoaded ? (
            <div className="w-24 h-9 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
          ) : !isSignedIn ? (
            <SignInButton>
              <Button
                size="sm"
                className="w-24 h-9 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 hover:scale-105 transition-all duration-200"
              >
                Sign In
              </Button>
            </SignInButton>
          ) : null}

          {/* Sign Up Button */}
          {!isLoaded ? (
            <div className="w-24 h-9 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
          ) : !isSignedIn ? (
            <SignUpButton>
              <Button
                size="sm"
                className="w-24 h-9 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 hover:scale-105 transition-all duration-200"
              >
                Sign Up
              </Button>
            </SignUpButton>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
