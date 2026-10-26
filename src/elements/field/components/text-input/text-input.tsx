import { Input as InputPrimitive } from "@base-ui/react/input";
import { useState } from "react";
import { cn } from "cn";

import { EyeIcon, EyeOffIcon } from "~ui/assets/icons";
import { FieldType } from "~ui/enums";

import {
    textInputStyles,
    inputControlStyles,
    passwordInputStyles,
    passwordToggleStyles,
    passwordIconStyles,
} from "./styles";

export const TextInput: UI.Field.TextInput.Signature = ({
    className,
    type,
    id,
    disabled,
    showPasswordLabel = "Show password",
    hidePasswordLabel = "Hide password",
    ...props
}) => {
    const [visible, setVisible] = useState(false);
    const VisibilityIcon = visible ? EyeOffIcon : EyeIcon;
    const password = type === FieldType.PASSWORD;
    return (
        <div data-slot="field-control" className={inputControlStyles}>
            <InputPrimitive
                {...props}
                id={id}
                disabled={disabled}
                type={password && visible ? FieldType.TEXT : type}
                data-slot="input"
                className={cn(textInputStyles, password && passwordInputStyles, className)}
            />
            {password && (
                <button
                    type="button"
                    disabled={disabled}
                    aria-controls={id}
                    aria-label={visible ? hidePasswordLabel : showPasswordLabel}
                    title={visible ? hidePasswordLabel : showPasswordLabel}
                    className={passwordToggleStyles}
                    onClick={() => setVisible((value) => !value)}>
                    <VisibilityIcon aria-hidden="true" className={passwordIconStyles} />
                </button>
            )}
        </div>
    );
};
