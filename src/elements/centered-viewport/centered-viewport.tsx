import { cn } from "cn";

import { centeredViewportVariants } from "./variants";

export function CenteredViewport({ className, ...props }: UI.CenteredViewport.Props) {
    return <main className={cn(centeredViewportVariants(), className)} {...props} />;
}
