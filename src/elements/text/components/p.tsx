import { cn } from "cn";

import { TextSize } from "~ui/enums";

import { textVariants } from "../styles";

export function TextP({ size = TextSize.SM, weight, tone, align, hyphens, className, ...props }: UI.Text.Props<"p">) {
    return <p {...props} className={cn(textVariants({ size, weight, tone, align, hyphens }), className)} />;
}
