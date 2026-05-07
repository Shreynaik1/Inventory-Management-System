"use client";

import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
  children: React.ReactNode;
  className?: string;
  loadingText?: string;
  variant?: "primary" | "danger" | "outline";
}

export function SubmitButton({
  children,
  className = "",
  loadingText = "Processing...",
  variant = "primary",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  const variants = {
    primary: "bg-purple-600 text-white hover:bg-purple-700 disabled:bg-purple-400",
    danger: "text-red-600 hover:text-red-900 disabled:text-red-400",
    outline: "bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50 disabled:border-purple-300 disabled:text-purple-300",
  };

  return (
    <button
      type="submit"
      disabled={pending}
      className={`flex items-center justify-center transition-all ${variants[variant]} ${className}`}
    >
      {pending ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </button>
  );
}
