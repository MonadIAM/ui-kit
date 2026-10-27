import type { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import type { JSX } from "react";

declare global {
    namespace UI.Radio.Group {
        type Props = Omit<RadioGroupPrimitive.Props<string>, "className"> & {
            label: string;
            showLabel?: boolean;
            className?: string;
        };

        type Result = JSX.Element;

        type Signature = (props: Props) => Result;
    }
}
