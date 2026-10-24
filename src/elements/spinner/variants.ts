import { cva } from "class-variance-authority";

export const spinnerVariants = cva("", {
    variants: {
        variant: {
            inline: "inline-grid size-4 shrink-0 place-items-center text-current",
            area: "grid size-full place-items-center text-primary",
        },
    },
});

export const spinnerIndicatorVariants = cva(
    "animate-spin rounded-full border-2 border-current border-t-transparent motion-reduce:animate-none",
    { variants: { variant: { inline: "size-4", area: "size-6" } } },
);
