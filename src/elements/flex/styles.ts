import { cva } from "class-variance-authority";

import { FlexAlignment, FlexJustification, FlexWrap } from "~ui/enums";

export const flexVariants = cva("flex", {
    variants: {
        align: {
            [FlexAlignment.START]: "items-start",
            [FlexAlignment.CENTER]: "items-center",
            [FlexAlignment.END]: "items-end",
            [FlexAlignment.STRETCH]: "items-stretch",
            [FlexAlignment.BASELINE]: "items-baseline",
        },
        justify: {
            [FlexJustification.START]: "justify-start",
            [FlexJustification.CENTER]: "justify-center",
            [FlexJustification.END]: "justify-end",
            [FlexJustification.BETWEEN]: "justify-between",
            [FlexJustification.AROUND]: "justify-around",
            [FlexJustification.EVENLY]: "justify-evenly",
        },
        wrap: {
            [FlexWrap.NONE]: "flex-nowrap",
            [FlexWrap.WRAP]: "flex-wrap",
            [FlexWrap.REVERSE]: "flex-wrap-reverse",
        },
    },
});

export const flexRowStyles = "flex-row";
export const flexColStyles = "flex-col";
