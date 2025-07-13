"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { File as FileIcon } from "lucide-react";
import { z } from "zod";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";
import { generatePdfSummary } from "@/actions/upload-actions";

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0] || null;
    setFile(uploadedFile);
  };

  const schema = z.object({
    file: z
      .instanceof(File, { message: "Invalid file" })
      .refine((file) => file.size <= 20 * 1024 * 1024, {
        message: "File size must be less than 20MB",
      })
      .refine((file) => file.type === "application/pdf", {
        message: "File must be a PDF",
      }),
  });

  const { startUpload } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      toast.success("✅ Upload complete!");
    },
    onUploadError: (err) => {
      toast.error("❌ Upload failed: " + (err?.message || "Unknown error"));
    },
    onUploadBegin: (file) => {
      toast(`⏳ Upload started for ${file}`);
    },
  });

  const handleUpload = async () => {
    if (!file) {
      toast("⚠️ No file selected. Please upload a PDF file before proceeding.");
      return;
    }

    const validated = schema.safeParse({ file });

    if (!validated.success) {
      toast(`❌ File validation failed: ${validated.error.errors[0].message}`);
      return;
    }

    const resp = await startUpload([file]);
    console.log(resp);

    toast("📄 Processing PDF. Hang tight! Our AI is reading your document...");

    const summaryResponse = await generatePdfSummary(resp);

    toast("🧠 Generating summary... Analyzing the content...");

    await new Promise((res) => setTimeout(res, 2000)); // Simulate delay

    if (summaryResponse.success) {
      toast(`🎯 Summary ready! ${summaryResponse.data.summary}`);
    } else {
      toast.error(`❌ Failed to generate summary: ${summaryResponse.message}`);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 w-full max-w-md space-y-5 z-10">
      <div className="space-y-2">
        <span className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Upload PDF
        </span>

        <input
          type="file"
          id="fileUpload"
          accept=".pdf"
          className="hidden"
          onChange={handleFileChange}
        />

        <label
          htmlFor="fileUpload"
          className="cursor-pointer flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded border border-dashed border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
            <FileIcon className="w-4 h-4" />
            {file ? file.name : "Choose a PDF file"}
          </div>
          <span className="text-sm text-pink-600 font-semibold">Browse</span>
        </label>
      </div>

      <Button
        onClick={handleUpload}
        className="w-full bg-pink-600 hover:bg-pink-700 text-white"
      >
        Upload your PDF
      </Button>
    </div>
  );
}
