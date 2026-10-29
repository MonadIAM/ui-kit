import { cn } from "cn";

import { TextSize, TextWeight } from "~ui/enums";

import { textVariants, textHeadingStyles } from "../styles";

export function TextH1({
    size = TextSize.XXL,
    weight = TextWeight.SEMIBOLD,
    className,
    hyphens,
    align,
    tone,
    ...props
}: UI.Text.Props<"h1">) {
    return (
        <h1 {...props} className={cn(textVariants({ size, weight, tone, align, hyphens }), textHeadingStyles, className)} />
    );
}
