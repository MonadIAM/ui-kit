import { cn } from "cn";

import { textVariants } from "../styles";

export function TextTime({ size, weight, tone, align, hyphens, className, ...props }: UI.Text.Props<"time">) {
    return <time {...props} className={cn(textVariants({ size, weight, tone, align, hyphens }), className)} />;
}
