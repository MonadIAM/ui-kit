import { cva } from "class-variance-authority";

import { TextSize, TextWeight, TextTone, TextAlign } from "~ui/enums";

export const textVariants = cva("", {
    variants: {
        size: {
            [TextSize.XS]: "text-xs leading-4",
            [TextSize.SM]: "text-sm leading-6",
            [TextSize.MD]: "text-base leading-6",
            [TextSize.LG]: "text-lg leading-7",
            [TextSize.XL]: "text-xl leading-7",
            [TextSize.XXL]: "text-2xl leading-8",
            [TextSize.XXXL]: "text-3xl leading-9",
        },
        weight: {
            [TextWeight.REGULAR]: "font-normal",
            [TextWeight.MEDIUM]: "font-medium",
            [TextWeight.SEMIBOLD]: "font-semibold",
            [TextWeight.BOLD]: "font-bold",
        },
        tone: {
            [TextTone.DEFAULT]: "text-foreground",
            [TextTone.MUTED]: "text-muted-foreground",
            [TextTone.PRIMARY]: "text-primary",
            [TextTone.SUCCESS]: "text-green-700 dark:text-green-400",
            [TextTone.WARNING]: "text-orange-600 dark:text-orange-400",
            [TextTone.DANGER]: "text-destructive",
        },
        align: {
            [TextAlign.START]: "text-start",
            [TextAlign.CENTER]: "text-center",
            [TextAlign.END]: "text-end",
            [TextAlign.JUSTIFY]: "text-justify",
        },
    },
});

export const textHeadingStyles = "tracking-tight";
