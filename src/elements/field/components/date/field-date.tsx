import { useField } from "@tanstack/react-form";

import { useFormContext } from "~ui/elements/form/context";

import { FieldFrame } from "../frame";
import { DateInput } from "../date-input/date-input";

export const FieldDate: UI.Field.Date.Signature = ({
    reserveErrorSpace,
    invalidMessage,
    orientation,
    validators,
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
            orientation={orientation}
            invalidMessage={invalidMessage}
            reserveErrorSpace={reserveErrorSpace}
            disabled={props.disabled}
            dirty={field.state.meta.isDirty}
            touched={field.state.meta.isTouched}
            errors={field.state.meta.errors}>
            <DateInput
                {...props}
                label={label}
                value={field.state.value}
                onBlur={field.handleBlur}
                onValueChange={(value) => field.handleChange(value as typeof field.state.value)}
            />
        </FieldFrame>
    );
};
