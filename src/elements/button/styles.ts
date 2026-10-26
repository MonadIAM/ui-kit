import { cva } from "class-variance-authority";

import { ButtonSize, ButtonVariant } from "~ui/enums";

export const buttonVariants = cva(
    "group/button inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent text-sm font-medium leading-5 whitespace-nowrap outline-none transition-colors select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive motion-reduce:transition-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
        variants: {
            variant: {
                [ButtonVariant.DEFAULT]: "bg-primary text-primary-foreground hover:bg-primary/90",
                [ButtonVariant.OUTLINE]:
                    "border-input bg-card text-foreground hover:bg-accent hover:text-accent-foreground",
                [ButtonVariant.SECONDARY]: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                [ButtonVariant.GHOST]:
                    "text-foreground hover:bg-accent hover:text-accent-foreground aria-expanded:bg-accent",
                [ButtonVariant.DESTRUCTIVE]:
                    "bg-destructive/10 text-destructive hover:bg-destructive/15 focus-visible:ring-destructive",
                [ButtonVariant.LINK]: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                [ButtonSize.DEFAULT]: "h-10 px-4",
                [ButtonSize.EXTRA_SMALL]: "h-7 gap-1 px-2 text-xs [&_svg:not([class*='size-'])]:size-3",
                [ButtonSize.SMALL]: "h-8 gap-1.5 px-3 text-xs",
                [ButtonSize.LARGE]: "h-11 px-5",
                [ButtonSize.ICON]: "size-9 p-0",
                [ButtonSize.ICON_EXTRA_SMALL]: "size-7 p-0 [&_svg:not([class*='size-'])]:size-3",
                [ButtonSize.ICON_SMALL]: "size-8 p-0",
                [ButtonSize.ICON_LARGE]: "size-10 p-0",
            },
        },
        defaultVariants: { variant: ButtonVariant.DEFAULT, size: ButtonSize.DEFAULT },
    },
);

export const buttonSpinnerStyles = "text-current";
