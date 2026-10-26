import type { ComponentProps, JSX } from "react";

import type { FormAlignment, FormDirection, FormSpacing } from "~ui/enums";

declare global {
    namespace UI.Form.Actions {
        type Props = ComponentProps<"div"> & {
            direction?: FormDirection;
            spacing?: FormSpacing;
            align?: FormAlignment;
            gap?: FormSpacing;
        };

        type Result = JSX.Element;

        type Signature = (props: Props) => Result;
    }
}
