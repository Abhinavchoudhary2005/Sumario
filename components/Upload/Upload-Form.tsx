"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { File as FileIcon } from "lucide-react";
import { z } from "zod";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";

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
      toast("⏳ Upload started for " + file);
    },
  });

  const handleUpload = async () => {
    if (!file) return toast.error("No file selected");

    const ValidatedFields = schema.safeParse({ file });

    if (!ValidatedFields.success) {
      toast.error(ValidatedFields.error.errors[0].message);
      return;
    }

    const resp = await startUpload([file]);
    if (!resp) {
      toast.error("Something went wrong during upload.");
      return;
    }

    toast.success("🎉 File uploaded successfully!");
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
