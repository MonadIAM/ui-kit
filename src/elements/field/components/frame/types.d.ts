import type { Field as FieldPrimitive } from "@base-ui/react/field";
import type { JSX, ReactNode } from "react";

import type { FieldOrientation } from "~ui/enums";

declare global {
    namespace UI.Field.Frame {
        type Props = Pick<FieldPrimitive.Root.Props, "name" | "disabled" | "dirty" | "touched"> & {
            orientation?: FieldOrientation;
            invalidMessage?: string;
            children: ReactNode;
            action?: ReactNode;
            readOnly?: boolean;
            errors: unknown[];
            label: ReactNode;
        };

        type Result = JSX.Element;

        type Signature = (props: Props) => Result;
    }
}
