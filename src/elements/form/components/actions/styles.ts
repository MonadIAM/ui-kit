import { cva } from "class-variance-authority";

import { FlexJustification, FormAlignment, FormSpacing } from "~ui/enums";

export const formActionsVariants = cva("min-w-0", {
    variants: {
        spacing: {
            [FormSpacing.NONE]: "mt-0",
            [FormSpacing.SMALL]: "mt-2",
            [FormSpacing.MEDIUM]: "mt-3",
            [FormSpacing.LARGE]: "mt-5",
        },
    },
    defaultVariants: { spacing: FormSpacing.NONE },
});

export const formActionsGap = {
    [FormSpacing.NONE]: "0",
    [FormSpacing.SMALL]: "0.5rem",
    [FormSpacing.MEDIUM]: "0.75rem",
    [FormSpacing.LARGE]: "1.25rem",
};

export const formActionsJustification = {
    [FormAlignment.START]: FlexJustification.START,
    [FormAlignment.CENTER]: FlexJustification.CENTER,
    [FormAlignment.END]: FlexJustification.END,
    [FormAlignment.BETWEEN]: FlexJustification.BETWEEN,
};
