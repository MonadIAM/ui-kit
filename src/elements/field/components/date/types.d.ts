import type { AnyFormApi } from "@tanstack/react-form";
import type { JSX } from "react";

declare global {
    namespace UI.Field.Date {
        type Props<TForm extends AnyFormApi, TName extends Binding.Name<TForm, string>> = Binding.Props<TForm, TName> &
            DateInput.Options &
            Pick<Frame.Props, "label" | "orientation" | "invalidMessage" | "reserveErrorSpace">;

        type Signature = <TForm extends AnyFormApi, TName extends Binding.Name<TForm, string>>(
            props: Props<TForm, TName>,
        ) => JSX.Element;
    }
}
