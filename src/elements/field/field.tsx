import { useId } from "react";

import { FieldLabel } from "./components/field-label";
import { FieldError } from "./components/field-error";
import { FieldRoot } from "./components/field-root";
import { TextInput } from "./components/text-input";

export const Field: UI.Field.Signature = ({
    orientation,
    validators,
    label,
    form,
    name,
    id,
    type = "text",
    "aria-describedby": describedBy,
    ...props
}) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;

    return (
        <form.Field name={name} validators={validators}>
            {(field) => {
                const invalid = field.state.meta.errors.length > 0;
                const messages = field.state.meta.errors.map((issue: unknown) => {
                    if (typeof issue === "string") {
                        return issue;
                    } else if (
                        issue &&
                        typeof issue === "object" &&
                        "message" in issue &&
                        typeof issue.message === "string"
                    ) {
                        return issue.message;
                    } else {
                        return "Invalid value";
                    }
                });

                return (
                    <FieldRoot orientation={orientation} data-invalid={invalid}>
                        <FieldLabel htmlFor={inputId}>{label}</FieldLabel>
                        <TextInput
                            {...props}
                            id={inputId}
                            name={field.name}
                            type={type}
                            value={String(field.state.value ?? "")}
                            onBlur={field.handleBlur}
                            onChange={(event) => field.handleChange(() => event.target.value as typeof field.state.value)}
                            aria-invalid={invalid}
                            aria-describedby={[describedBy, invalid && errorId].filter(Boolean).join(" ") || undefined}
                        />
                        {invalid && <FieldError id={errorId}>{messages.join(" ")}</FieldError>}
                    </FieldRoot>
                );
            }}
        </form.Field>
    );
};
