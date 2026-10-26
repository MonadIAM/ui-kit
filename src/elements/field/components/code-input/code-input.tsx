import { OTPField } from "@base-ui/react/otp-field";
import { cn } from "cn";

import { codeControlStyles, codeSlotStyles } from "./styles";

export const CodeInput: UI.Field.CodeInput.Signature = ({ className, onBlur, ...props }) => {
    return (
        <OTPField.Root
            {...props}
            length={6}
            data-slot="field-control"
            className={cn(codeControlStyles, className)}
            onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                    onBlur?.();
                }
            }}>
            {Array.from({ length: 6 }, (_, index) => (
                <OTPField.Input key={index} className={codeSlotStyles} />
            ))}
        </OTPField.Root>
    );
};
