import { cva } from "class-variance-authority";

import { NavbarAppearance } from "~ui/enums";

export const navbarVariants = cva("flex min-h-18 shrink-0 flex-wrap items-center gap-x-5 gap-y-3 px-5 py-3 sm:px-8", {
    variants: {
        appearance: {
            [NavbarAppearance.SOLID]: "border-b border-border bg-card",
            [NavbarAppearance.PLAIN]: "bg-background",
        },
    },
    defaultVariants: { appearance: NavbarAppearance.SOLID },
});
export const navbarBrandStyles = "min-w-0 shrink-0";
export const navbarActionsStyles = "ml-auto flex flex-wrap items-center justify-end gap-2 sm:gap-3";
