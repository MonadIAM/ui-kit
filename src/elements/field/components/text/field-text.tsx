import { useField } from "@tanstack/react-form";

import { useFormContext } from "~ui/elements/form/context";

import { TextInput } from "../text-input";
import { FieldFrame } from "../frame";

export const FieldText: UI.Field.Text.Signature = ({
    reserveErrorSpace,
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
            reserveErrorSpace={reserveErrorSpace}
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
