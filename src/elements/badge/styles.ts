import { cva } from "class-variance-authority";

import { BadgeTone } from "~ui/enums";

export const badgeVariants = cva(
    "inline-flex w-fit items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs font-medium leading-4",
    {
        variants: {
            tone: {
                [BadgeTone.NEUTRAL]: "border-border bg-muted text-muted-foreground",
                [BadgeTone.SUCCESS]:
                    "border-green-600/20 bg-green-600/10 text-green-700 dark:border-green-400/20 dark:bg-green-400/10 dark:text-green-400",
                [BadgeTone.WARNING]:
                    "border-orange-600/20 bg-orange-600/10 text-orange-700 dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-400",
                [BadgeTone.DANGER]: "border-destructive/20 bg-destructive/10 text-destructive",
            },
        },
        defaultVariants: { tone: BadgeTone.NEUTRAL },
    },
);

export const badgeDotStyles = "size-1.5 shrink-0 rounded-full bg-current";
