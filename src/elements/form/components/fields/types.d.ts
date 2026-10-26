import type { JSX, ReactNode } from "react";

declare global {
    namespace UI.Form.Fields {
        type Props = {
            children: ReactNode;
            legend?: ReactNode;
            disabled: boolean;
        };

        type Result = JSX.Element;

        type Signature = (props: Props) => Result;
    }
}
