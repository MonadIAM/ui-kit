import type { ComponentProps, JSX } from "react";

import type { FieldType } from "~ui/enums";

declare global {
    namespace UI.Field.TextInput {
        type Options = Omit<
            ComponentProps<"input">,
            | keyof UI.Field.Input.Contract
            | "type"
            | "form"
            | "name"
            | "defaultValue"
            | "onChange"
            | "children"
            | "aria-invalid"
        > & {
            type?: FieldType;
            showPasswordLabel?: string;
            hidePasswordLabel?: string;
        };

        type Props = Options & UI.Field.Input.Contract;

        type Result = JSX.Element;

        type Signature = (props: Props) => Result;
    }
}
