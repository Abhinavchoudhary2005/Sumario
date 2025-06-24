"use client";

import { SignIn, useAuth } from "@clerk/nextjs";

export default function Page() {
  const { isLoaded } = useAuth();

  return (
    <div className="py-16 flex items-center justify-center bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black px-4">
      <div className="w-full max-w-sm min-h-[420px] flex items-center justify-center">
        {!isLoaded ? (
          <div className="w-full space-y-5 p-10 rounded-xl bg-white dark:bg-gray-900 shadow-md animate-pulse">
            {/* Title */}
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto" />

            {/* Email */}
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full" />

            {/* Password */}
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full" />

            {/* Button */}
            <div className="h-10 bg-purple-400/40 dark:bg-purple-500/30 rounded w-full" />
          </div>
        ) : (
          <SignIn />
        )}
      </div>
    </div>
  );
}
