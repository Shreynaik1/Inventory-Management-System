"use client";

import { createProduct } from "@/lib/actions/products";
import { SubmitButton } from "./submit-button";
import Link from "next/link";
import { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function AddProductForm() {
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setError(null);
    try {
      await createProduct(formData);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
      <form action={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-700 animate-in fade-in slide-in-from-top-1">
            <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Product Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
            placeholder="e.g. Premium Wireless Headphones"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
              Initial Quantity *
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="0"
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
              placeholder="0"
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
              Price ($) *
            </label>
            <input
              type="number"
              id="price"
              name="price"
              step="0.01"
              min="0"
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
              placeholder="0.00"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="sku" className="block text-sm font-medium text-gray-700 mb-2">
              SKU (Unique Identifier)
            </label>
            <input
              type="text"
              id="sku"
              name="sku"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
              placeholder="e.g. WH-1000XM4"
            />
          </div>
          <div>
            <label htmlFor="lowStockAt" className="block text-sm font-medium text-gray-700 mb-2">
              Low Stock Threshold
            </label>
            <input
              type="number"
              id="lowStockAt"
              name="lowStockAt"
              min="0"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
              placeholder="Notify when below..."
            />
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <SubmitButton
            className="px-8 py-3 rounded-lg font-semibold shadow-lg shadow-purple-200"
            loadingText="Creating Product..."
          >
            Create Product
          </SubmitButton>
          <Link
            href="/inventory"
            className="px-8 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all text-center"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
