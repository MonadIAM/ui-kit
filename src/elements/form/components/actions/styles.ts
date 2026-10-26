import { cva } from "class-variance-authority";

import { FormAlignment, FormDirection, FormSpacing } from "~ui/enums";

export const formActionsVariants = cva("flex min-w-0", {
    variants: {
        direction: { [FormDirection.VERTICAL]: "flex-col", [FormDirection.HORIZONTAL]: "flex-row flex-wrap items-center" },
        gap: {
            [FormSpacing.NONE]: "gap-0",
            [FormSpacing.SMALL]: "gap-2",
            [FormSpacing.MEDIUM]: "gap-3",
            [FormSpacing.LARGE]: "gap-5",
        },
        spacing: {
            [FormSpacing.NONE]: "mt-0",
            [FormSpacing.SMALL]: "mt-2",
            [FormSpacing.MEDIUM]: "mt-3",
            [FormSpacing.LARGE]: "mt-5",
        },
        align: {
            [FormAlignment.START]: "justify-start",
            [FormAlignment.CENTER]: "justify-center",
            [FormAlignment.END]: "justify-end",
            [FormAlignment.BETWEEN]: "justify-between",
        },
    },
    defaultVariants: {
        direction: FormDirection.VERTICAL,
        gap: FormSpacing.MEDIUM,
        spacing: FormSpacing.NONE,
        align: FormAlignment.START,
    },
});
