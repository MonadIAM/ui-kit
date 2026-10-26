import { cn } from "cn";

import { centeredViewportStyles } from "./styles";

export function CenteredViewport({ className, ...props }: UI.CenteredViewport.Props) {
    return <main className={cn(centeredViewportStyles, className)} {...props} />;
}
