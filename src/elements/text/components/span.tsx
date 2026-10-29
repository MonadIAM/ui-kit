import { cn } from "cn";

import { textVariants } from "../styles";

export function TextSpan({ size, weight, tone, align, hyphens, className, ...props }: UI.Text.Props<"span">) {
    return <span {...props} className={cn(textVariants({ size, weight, tone, align, hyphens }), className)} />;
}
