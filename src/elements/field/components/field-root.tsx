import { cn } from "cn";

import { fieldVariants } from "../variants";

export function FieldRoot({ className, orientation = "vertical", ...props }: UI.Field.Root.Props) {
    return (
        <div
            role="group"
            data-slot="field"
            data-orientation={orientation}
            className={cn(fieldVariants({ orientation }), className)}
            {...props}
        />
    );
}
