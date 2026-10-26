import type { ComponentProps, JSX } from "react";

import type { FormAlignment, FormSpacing } from "~ui/enums";

declare global {
    namespace UI.Form.Links {
        type Props = ComponentProps<"ul"> & {
            align?: Exclude<FormAlignment, FormAlignment.BETWEEN>;
            spacing?: FormSpacing;
            gap?: FormSpacing;
        };

        type Result = JSX.Element;

        type Signature = (props: Props) => Result;
    }
}
