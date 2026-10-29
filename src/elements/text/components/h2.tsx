import { cn } from "cn";

import { TextSize, TextWeight } from "~ui/enums";

import { textVariants, textHeadingStyles } from "../styles";

export function TextH2({
    size = TextSize.XL,
    weight = TextWeight.SEMIBOLD,
    className,
    hyphens,
    align,
    tone,
    ...props
}: UI.Text.Props<"h2">) {
    return (
        <h2 {...props} className={cn(textVariants({ size, weight, tone, align, hyphens }), textHeadingStyles, className)} />
    );
}
