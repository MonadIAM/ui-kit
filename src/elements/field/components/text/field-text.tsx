import { useField } from "@tanstack/react-form";

import { useFormContext } from "~ui/elements/form/context";

import { FieldFrame } from "../frame";
import { TextInput } from "../text-input";

export const FieldText: UI.Field.Text.Signature = ({
    form,
    name,
    validators,
    label,
    action,
    orientation,
    invalidMessage,
    ...props
}) => {
    useFormContext();
    const field = useField({ form, name, validators });

    return (
        <FieldFrame
            name={field.name}
            label={label}
            action={action}
            orientation={orientation}
            invalidMessage={invalidMessage}
            readOnly={props.readOnly}
            disabled={props.disabled}
            dirty={field.state.meta.isDirty}
            touched={field.state.meta.isTouched}
            errors={field.state.meta.errors}>
            <TextInput
                {...props}
                value={field.state.value}
                onBlur={props.readOnly ? undefined : field.handleBlur}
                onValueChange={
                    props.readOnly ? undefined : (value) => field.handleChange(value as typeof field.state.value)
                }
            />
        </FieldFrame>
    );
};
