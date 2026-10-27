import type { AnyFormApi } from "@tanstack/react-form";
import type { JSX } from "react";

declare global {
    namespace UI.Field.Code {
        type Props<TForm extends AnyFormApi, TName extends Binding.Name<TForm, string>> = Binding.Props<TForm, TName> &
            CodeInput.Options &
            Pick<Frame.Props, "label" | "orientation" | "invalidMessage" | "reserveErrorSpace">;

        type Result = JSX.Element;

        type Signature = <TForm extends AnyFormApi, TName extends Binding.Name<TForm, string>>(
            props: Props<TForm, TName>,
        ) => Result;
    }
}
