import { cn } from "cn";

import { SpinnerVariant } from "~ui/enums";

import { spinnerVariants, spinnerIndicatorVariants } from "./styles";

export function Spinner({ className, variant = SpinnerVariant.AREA, ...props }: UI.Spinner.Props) {
    return (
        <span
            role="status"
            aria-label="Loading"
            data-slot="spinner"
            className={cn(spinnerVariants({ variant }), className)}
            {...props}>
            <span aria-hidden="true" className={spinnerIndicatorVariants({ variant })} />
        </span>
    );
}
