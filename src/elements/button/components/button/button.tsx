import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cn } from "cn";

import { ButtonSize, ButtonVariant, SpinnerVariant } from "~ui/enums";
import { Spinner } from "~ui/elements/spinner";

import { buttonVariants, buttonSpinnerStyles } from "./styles";

export function BaseButton({
    className,
    variant = ButtonVariant.DEFAULT,
    size = ButtonSize.DEFAULT,
    disabled = false,
    loading = false,
    children,
    icon,
    ...props
}: UI.Button.Props) {
    return (
        <ButtonPrimitive
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            disabled={disabled || loading}
            aria-busy={loading}
            {...props}>
            {loading && <Spinner variant={SpinnerVariant.INLINE} aria-hidden="true" className={buttonSpinnerStyles} />}
            {icon}
            {children}
        </ButtonPrimitive>
    );
}
