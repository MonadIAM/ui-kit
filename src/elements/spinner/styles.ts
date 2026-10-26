import { cva } from "class-variance-authority";

import { SpinnerVariant } from "~ui/enums";

export const spinnerVariants = cva("", {
    variants: {
        variant: {
            [SpinnerVariant.INLINE]: "inline-grid size-4 shrink-0 place-items-center text-current",
            [SpinnerVariant.AREA]: "grid size-full place-items-center text-primary",
        },
    },
});

export const spinnerIndicatorVariants = cva(
    "animate-spin rounded-full border-2 border-current border-t-transparent motion-reduce:animate-none",
    { variants: { variant: { [SpinnerVariant.INLINE]: "size-4", [SpinnerVariant.AREA]: "size-6" } } },
);
