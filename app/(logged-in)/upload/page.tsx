import { UploadCloud } from "lucide-react";
import UploadForm from "@/components/Upload/Upload-Form";

export default function UploadPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b to-white from-gray-100 dark:to-black dark:from-gray-900 overflow-hidden">
      {/* Blurred Background Effects */}
      <div className="absolute top-10 left-[-60px] w-80 h-80 rounded-full blur-[100px] pointer-events-none z-0 bg-green-400/30 dark:bg-white/10" />
      <div className="absolute bottom-[-50px] right-[-60px] w-96 h-96 rounded-full blur-[100px] pointer-events-none z-0 bg-green-400/30 dark:bg-white/10" />

      {/* Main Content */}
      <div className="py-36 flex flex-col items-center justify-center px-4">
        <div className="inline-flex cursor-pointer items-center space-x-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 rounded-full border border-gray-200 dark:border-gray-700 mb-6 hover:scale-105 transition-transform duration-200">
          <UploadCloud className="w-4 h-4 text-pink-500" />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            AI-Powered Content Creation
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white">
          Start Uploading <span className="text-pink-600">Your PDF&apos;s</span>
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-center mt-3 mb-6">
          Upload your PDF and let our AI do the magic! ✨
        </p>

        {/* Upload Form */}
        <UploadForm />
      </div>
    </div>
  );
}
