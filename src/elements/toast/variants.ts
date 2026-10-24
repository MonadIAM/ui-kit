import { cva } from "class-variance-authority";

export const toastViewportVariants = cva(
    "pointer-events-none fixed right-4 bottom-4 z-50 flex max-h-[calc(100dvh-2rem)] w-[min(24rem,calc(100vw-2rem))] flex-col gap-3 outline-none",
);

export const toastRootVariants = cva(
    "pointer-events-auto relative shrink-0 rounded-lg border border-border bg-popover p-4 text-popover-foreground shadow-lg transition-[opacity,transform] duration-200 outline-none data-[ending-style]:translate-x-4 data-[ending-style]:opacity-0 data-[starting-style]:translate-y-2 data-[starting-style]:opacity-0 data-[type=error]:border-destructive/50 data-[type=success]:border-emerald-600/50 data-[type=warning]:border-amber-600/50 motion-reduce:transition-none",
);

export const toastContentVariants = cva("flex items-start gap-3");

export const toastIconVariants = cva("mt-0.5 flex size-5 shrink-0 items-center justify-center");

export const toastBodyVariants = cva("min-w-0 flex-1");

export const toastTitleVariants = cva("text-sm font-semibold wrap-anywhere");

export const toastDescriptionVariants = cva(
    "mt-1 max-h-40 overflow-auto text-sm wrap-anywhere text-muted-foreground empty:hidden",
);

export const toastActionVariants = cva(
    "mt-3 rounded px-1 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-ring",
);

export const toastCloseVariants = cva(
    "flex size-6 shrink-0 items-center justify-center rounded text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring",
);

export const toastCloseIconVariants = cva("size-4");
