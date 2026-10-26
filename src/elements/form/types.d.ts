import type { AnyFormApi } from "@tanstack/react-form";
import type { ComponentProps, JSX } from "react";

declare global {
    namespace UI.Form {
        type Props = Omit<ComponentProps<"form">, "onSubmit" | "onReset"> & {
            form: AnyFormApi;
        };

        type Result = JSX.Element;

        type Signature = (props: Props) => Result;
    }
}
