import { cn } from "cn";

import { TextSize, TextWeight } from "~ui/enums";

import { textVariants, textHeadingStyles } from "../styles";

export function TextH3({
    size = TextSize.LG,
    weight = TextWeight.SEMIBOLD,
    className,
    align,
    tone,
    ...props
}: UI.Text.Props<"h3">) {
    return <h3 {...props} className={cn(textVariants({ size, weight, tone, align }), textHeadingStyles, className)} />;
}
