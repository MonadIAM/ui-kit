import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "cn";

import { textInputVariants } from "../variants";

export function TextInput({ className, type, ...props }: UI.Field.TextInput.Props) {
    return <InputPrimitive type={type} data-slot="input" className={cn(textInputVariants(), className)} {...props} />;
}
