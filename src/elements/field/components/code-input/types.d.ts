import type { ComponentProps, JSX } from "react";

declare global {
    namespace UI.Field.CodeInput {
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
            | "maxLength"
        > & {
            length: number;
            groupSize?: number;
            validationType?: "numeric" | "alphanumeric";
            normalizeValue?(value: string): string;
        };

        type Props = Options & UI.Field.Input.Contract;

        type Result = JSX.Element;

        type Signature = (props: Props) => Result;
    }
}
