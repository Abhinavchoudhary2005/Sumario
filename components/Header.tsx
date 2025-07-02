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
import Link from "next/link";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { isLoaded, isSignedIn } = useUser();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative bg-gradient-to-b to-white from-gray-100 dark:to-gray-900 dark:from-gray-900 transition-colors duration-300 overflow-hidden">
      {/* 💫 Aesthetic blurred patches */}
      {/* Top Left */}
      <div className="absolute top-10 left-[-60px] w-80 h-80 rounded-full blur-[100px] pointer-events-none z-0 bg-green-400/30 dark:bg-white/10" />

      {/* Bottom Right */}
      <div className="absolute bottom-10 right-[-60px] w-80 h-80 rounded-full blur-[100px] pointer-events-none z-0 bg-green-400/30 dark:bg-white/10" />

      <header className="w-full px-6 py-4 bg-transparent backdrop-blur-sm border-b border-transparent dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer hover-scale">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">
                Sumario
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#Pricing"
              className="text-sm font-[600] text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Pricing
            </Link>
            {isLoaded && isSignedIn && (
              <Link
                href="/summaries"
                className="text-sm font-[600] text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Your Summaries
              </Link>
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>

            <SignedIn>
              <Link href="/upload">
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden sm:flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload a PDF</span>
                </Button>
              </Link>
              <UserButton />
            </SignedIn>

            {/* Sign In */}
            {!isLoaded ? (
              <div className="w-24 h-9 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
            ) : !isSignedIn ? (
              <SignInButton mode="modal">
                <Button
                  size="sm"
                  className="w-24 h-9 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 hover:scale-105 transition-all duration-200"
                >
                  Sign In
                </Button>
              </SignInButton>
            ) : null}

            {/* Sign Up */}
            {!isLoaded ? (
              <div className="w-24 h-9 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
            ) : !isSignedIn ? (
              <SignUpButton mode="modal">
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
    </div>
  );
};

export default Header;
