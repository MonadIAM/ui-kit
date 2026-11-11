import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "cn";

import { textInputStyles } from "../text-input/styles";
import { codeInputStyles } from "./styles";

export const CodeInput: UI.Field.CodeInput.Signature = ({
    className,
    groupSize,
    length,
    value,
    validationType = "numeric",
    normalizeValue,
    onValueChange,
    inputMode,
    ...props
}) => {
    const grouped = groupSize !== undefined && groupSize > 0;

    const handleValueChange = (input: string) => {
        const normalized = normalizeValue ? normalizeValue(input) : input;
        const code = normalized.replace(validationType === "numeric" ? /[^0-9]/g : /[^a-zA-Z0-9]/g, "").slice(0, length);

        if (grouped) {
            const groups: string[] = [];
            for (let index = 0; index < code.length; index += groupSize) {
                groups.push(code.slice(index, index + groupSize));
            }
            onValueChange?.(groups.join("-"));
        } else {
            onValueChange?.(code);
        }
    };

    return (
        <InputPrimitive
            autoCapitalize="none"
            spellCheck={false}
            {...props}
            type="text"
            inputMode={inputMode ?? (validationType === "numeric" ? "numeric" : "text")}
            value={grouped ? value.replaceAll("-", "") : value}
            onValueChange={handleValueChange}
            data-slot="field-control"
            className={cn(textInputStyles, codeInputStyles, className)}
        />
    );
};
