import { toast as sonnerToast } from "sonner";

/**
 * Minimal wrapper to keep compatibility with old `useToast()` usage.
 * This ensures your existing components do NOT break.
 */
export function useToast() {
  return {
    toast: sonnerToast,
    dismiss: sonnerToast.dismiss,
  };
}

/**
 * Direct export for calling toast() without useToast()
 */
export const toast = sonnerToast;
