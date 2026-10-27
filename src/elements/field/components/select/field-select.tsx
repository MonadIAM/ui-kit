import { useField } from "@tanstack/react-form";

import { useFormContext } from "~ui/elements/form/context";

import { SelectInput } from "../select-input";
import { FieldFrame } from "../frame";

export const FieldSelect: UI.Field.Select.Signature = ({
    invalidMessage,
    orientation,
    validators,
    action,
    label,
    form,
    name,
    ...props
}) => {
    const parentForm = useFormContext();

    if (!Object.is(parentForm, form)) {
        throw new Error("Field must use the same form instance as its parent Form.");
    }

    const field = useField({ form, name, validators });

    return (
        <FieldFrame
            name={field.name}
            label={label}
            action={action}
            orientation={orientation}
            invalidMessage={invalidMessage}
            disabled={props.disabled}
            dirty={field.state.meta.isDirty}
            touched={field.state.meta.isTouched}
            errors={field.state.meta.errors}>
            <SelectInput
                {...props}
                name={field.name}
                label={label}
                value={field.state.value}
                onBlur={field.handleBlur}
                onValueChange={(value) => field.handleChange(value as typeof field.state.value)}
            />
        </FieldFrame>
    );
};
