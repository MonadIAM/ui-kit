import type { ComponentProps, JSX, ReactNode } from "react";

declare global {
    namespace UI.Form.Fields {
        type Props = ComponentProps<"fieldset"> & {
            legend?: ReactNode;
        };

        type Result = JSX.Element;

        type Signature = (props: Props) => Result;
    }
}
