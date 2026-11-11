import type { Radio as RadioPrimitive } from "@base-ui/react/radio";
import type { JSX, ReactNode } from "react";

declare global {
    namespace UI.Radio {
        type Props = Omit<RadioPrimitive.Root.Props<string>, "children" | "className" | "render"> & {
            label: string;
            preview?: ReactNode;
            showLabel?: boolean;
            className?: string;
        };

        type Result = JSX.Element;

        type Signature = (props: Props) => Result;
    }
}
