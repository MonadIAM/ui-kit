import type { OTPField } from "@base-ui/react/otp-field";
import type { ComponentProps, JSX } from "react";

declare global {
    namespace UI.Field.CodeInput {
        type Options = Omit<
            OTPField.Root.Props,
            | keyof UI.Field.Input.Contract
            | "form"
            | "name"
            | "defaultValue"
            | "onChange"
            | "children"
            | "aria-invalid"
            | "render"
            | "className"
            | "style"
            | "ref"
        > &
            Pick<ComponentProps<"div">, "className" | "style">;

        type Props = Options & UI.Field.Input.Contract;

        type Result = JSX.Element;

        type Signature = (props: Props) => Result;
    }
}
