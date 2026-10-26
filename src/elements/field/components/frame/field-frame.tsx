import { Field } from "@base-ui/react/field";

import {
    fieldVariants,
    fieldLabelStyles,
    fieldErrorStyles,
    fieldMessageStyles,
    fieldHeadingStyles,
    fieldActionStyles,
} from "./styles";

export const FieldFrame: UI.Field.Frame.Signature = ({
    label,
    action,
    orientation,
    readOnly,
    errors,
    invalidMessage = "Invalid value",
    children,
    ...props
}) => {
    const [issue] = errors;
    const message =
        typeof issue === "string"
            ? issue
            : issue && typeof issue === "object" && "message" in issue && typeof issue.message === "string"
              ? issue.message
              : invalidMessage;
    return (
        <Field.Root
            {...props}
            invalid={errors.length > 0}
            data-slot="field"
            data-readonly={readOnly}
            className={fieldVariants({ orientation })}>
            <div data-slot="field-heading" className={fieldHeadingStyles}>
                <Field.Label data-slot="field-label" className={fieldLabelStyles}>
                    {label}
                </Field.Label>
                {action && <div className={fieldActionStyles}>{action}</div>}
            </div>
            {children}
            {!readOnly && (
                <div className={fieldMessageStyles}>
                    {errors.length > 0 && (
                        <Field.Error match role="alert" data-slot="field-error" className={fieldErrorStyles}>
                            {message}
                        </Field.Error>
                    )}
                </div>
            )}
        </Field.Root>
    );
};
