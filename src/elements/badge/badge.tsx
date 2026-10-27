import { cn } from "cn";

import { Text } from "~ui/elements/text";

import { badgeVariants, badgeDotStyles } from "./styles";

export function Badge({ tone, className, children, ...props }: UI.Badge.Props) {
    return (
        <Text.Span {...props} className={cn(badgeVariants({ tone }), className)}>
            <span aria-hidden="true" className={badgeDotStyles} />
            {children}
        </Text.Span>
    );
}
