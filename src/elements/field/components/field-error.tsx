import { cn } from "cn";

import { fieldErrorVariants } from "../variants";

export function FieldError({ className, ...props }: UI.Field.Error.Props) {
    return <div role="alert" data-slot="field-error" className={cn(fieldErrorVariants(), className)} {...props} />;
}
