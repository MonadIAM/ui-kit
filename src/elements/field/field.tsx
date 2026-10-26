import { FieldControl } from "./components/control";
import { FieldFrame } from "./components/frame";

export const Field: UI.Field.Signature = ({ field, label, action, orientation, invalidMessage, ...props }) => (
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
        <FieldControl
            {...props}
            value={field.state.value}
            onBlur={props.readOnly ? undefined : field.handleBlur}
            onValueChange={props.readOnly ? undefined : field.handleChange}
        />
    </FieldFrame>
);
