import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cn } from "cn";

import { buttonVariants, buttonSpinnerVariants } from "./variants";
import { Spinner } from "../spinner";

export function Button({
    className,
    variant = "default",
    size = "default",
    loading = false,
    disabled = false,
    children,
    ...props
}: UI.Button.Props) {
    return (
        <ButtonPrimitive
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            disabled={disabled || loading}
            aria-busy={loading}
            {...props}>
            {loading && (
                <Spinner
                    variant="inline"
                    aria-hidden="true"
                    className={buttonSpinnerVariants({ inherit: variant === "default" || variant === "destructive" })}
                />
            )}
            {children}
        </ButtonPrimitive>
    );
}
