import { FieldType } from "~ui/enums";

import { CodeInput } from "../code-input";
import { TextInput } from "../text-input";

export const FieldControl: UI.Field.Control.Signature = ({ onValueChange, ...props }) => {
    if (props.type === FieldType.CODE) {
        const { type: _type, ...control } = props;
        return <CodeInput {...control} onValueChange={onValueChange} />;
    }

    return <TextInput {...props} onValueChange={onValueChange} />;
};
