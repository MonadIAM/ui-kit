import { cva } from "class-variance-authority";

import { FormAlignment, FormSpacing } from "~ui/enums";

export const formLinksVariants = cva(
    "flex min-w-0 list-none flex-col p-0 text-sm leading-6 text-muted-foreground [&_a]:rounded-sm [&_a]:text-primary [&_a]:outline-none [&_a]:underline-offset-4 [&_a:hover]:underline [&_a:focus-visible]:ring-2 [&_a:focus-visible]:ring-ring",
    {
        variants: {
            gap: {
                [FormSpacing.NONE]: "gap-0",
                [FormSpacing.SMALL]: "gap-1",
                [FormSpacing.MEDIUM]: "gap-2",
                [FormSpacing.LARGE]: "gap-3",
            },
            spacing: {
                [FormSpacing.NONE]: "mt-0",
                [FormSpacing.SMALL]: "mt-2",
                [FormSpacing.MEDIUM]: "mt-3",
                [FormSpacing.LARGE]: "mt-5",
            },
            align: {
                [FormAlignment.START]: "text-left",
                [FormAlignment.CENTER]: "text-center",
                [FormAlignment.END]: "text-right",
            },
        },
        defaultVariants: { gap: FormSpacing.SMALL, spacing: FormSpacing.LARGE, align: FormAlignment.CENTER },
    },
);
