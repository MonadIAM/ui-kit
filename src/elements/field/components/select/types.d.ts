import type { AnyFormApi } from "@tanstack/react-form";
import type { JSX } from "react";

declare global {
    namespace UI.Field.Select {
        type Option = SelectInput.Option;

        type Props<TForm extends AnyFormApi, TName extends Binding.Name<TForm, string>> = Binding.Props<TForm, TName> &
            SelectInput.Options &
            Pick<Frame.Props, "orientation" | "invalidMessage" | "reserveErrorSpace" | "action">;

        type Result = JSX.Element;

        type Signature = <TForm extends AnyFormApi, TName extends Binding.Name<TForm, string>>(
            props: Props<TForm, TName>,
        ) => Result;
    }
}
