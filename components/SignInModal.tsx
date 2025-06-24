"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAuth } from "@/contexts/AuthContext";

interface SignInModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignInModal = ({ open, onOpenChange }: SignInModalProps) => {
  const [email, setEmail] = useState("");
  const { signIn } = useAuth();

  const handleSignIn = () => {
    if (email.trim()) {
      signIn(email);
      onOpenChange(false);
      setEmail("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md animate-scale-in">
        <DialogHeader>
          <DialogTitle>Sign In to Sumario</DialogTitle>
          <DialogDescription>
            Enter your email to sign in and access your summaries.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            onKeyPress={(e) => e.key === "Enter" && handleSignIn()}
          />
          <Button
            onClick={handleSignIn}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 transition-all duration-200 hover:scale-105"
          >
            Sign In
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
