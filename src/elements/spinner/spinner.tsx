import { cn } from "cn";

import { spinnerVariants, spinnerIndicatorVariants } from "./variants";

export function Spinner({ className, variant = "area", ...props }: UI.Spinner.Props) {
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
