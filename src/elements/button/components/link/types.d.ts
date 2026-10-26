import type { JSX } from "react";

declare global {
    namespace UI.Button.Link {
        type Props = Omit<UI.Button.Props, "variant" | "size" | "type">;

        type Result = JSX.Element;

        type Signature = (props: Props) => Result;
    }
}
