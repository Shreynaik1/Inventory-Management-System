"use client";

import { deleteProduct } from "@/lib/actions/products";
import { SubmitButton } from "./submit-button";
import { Trash2 } from "lucide-react";

interface DeleteProductButtonProps {
  productId: string;
}

export function DeleteProductButton({ productId }: DeleteProductButtonProps) {
  return (
    <form action={deleteProduct}>
      <input type="hidden" name="id" value={productId} />
      <SubmitButton
        variant="danger"
        className="text-red-600 hover:text-red-900 flex items-center"
        loadingText="Deleting..."
      >
        <Trash2 className="w-4 h-4 mr-1" />
        Delete
      </SubmitButton>
    </form>
  );
}
