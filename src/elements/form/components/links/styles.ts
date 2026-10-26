import { cva } from "class-variance-authority";

import { FormAlignment, FormSpacing } from "~ui/enums";

export const formLinksVariants = cva(
    "min-w-0 list-none p-0 text-sm leading-6 text-muted-foreground [&_a]:rounded-sm [&_a]:text-primary [&_a]:outline-none [&_a]:underline-offset-4 [&_a:hover]:underline [&_a:focus-visible]:ring-2 [&_a:focus-visible]:ring-ring",
    {
        variants: {
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
        defaultVariants: { spacing: FormSpacing.LARGE, align: FormAlignment.CENTER },
    },
);

export const formLinksGap = {
    [FormSpacing.NONE]: "0",
    [FormSpacing.SMALL]: "0.25rem",
    [FormSpacing.MEDIUM]: "0.5rem",
    [FormSpacing.LARGE]: "0.75rem",
};
