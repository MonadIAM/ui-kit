import { cn } from "cn";

import { fieldLabelVariants, labelVariants } from "../variants";

export function FieldLabel({ className, ...props }: UI.Field.Label.Props) {
    return <label data-slot="field-label" className={cn(labelVariants(), fieldLabelVariants(), className)} {...props} />;
}
