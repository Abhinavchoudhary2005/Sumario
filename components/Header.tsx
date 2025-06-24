"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Upload, User, LogOut, Moon, Sun } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import SignInModal from "./SignInModal";
import { useTheme } from "next-themes";

const Header = () => {
  const { user, signOut } = useAuth();
  const [showSignInModal, setShowSignInModal] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleUpgradeClick = () => {
    console.log("Redirect to upgrade page");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="w-full px-6 py-4 bg-white/80 dark:bg-gray-900 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 hover-scale">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-semibold text-gray-900 dark:text-white">
            Sumario
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors story-link"
          >
            Pricing
          </a>
          {user && (
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors story-link"
            >
              Your Summaries
            </a>
          )}
        </nav>

        <div className="flex items-center space-x-3">
          {/* 🌗 Theme Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>

          {user ? (
            <>
              {user.isPro ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden sm:flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload a PDF</span>
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={handleUpgradeClick}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 hover:scale-105 transition-all duration-200"
                >
                  Upgrade to Pro
                </Button>
              )}

              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
                  <User className="w-4 h-4 text-gray-600 dark:text-white" />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={signOut}
                  className="hover:bg-red-50 dark:hover:bg-red-900 hover:text-red-600 transition-colors duration-200"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            </>
          ) : (
            <Button
              size="sm"
              onClick={() => setShowSignInModal(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 hover:scale-105 transition-all duration-200"
            >
              Sign In
            </Button>
          )}
        </div>
      </div>

      <SignInModal open={showSignInModal} onOpenChange={setShowSignInModal} />
    </header>
  );
};

export default Header;
