import type { JSX, ReactNode } from "react";

import type { FieldType } from "~ui/enums";

declare global {
    namespace UI.Field.Control {
        type Options =
            (TextInput.Options & { action?: ReactNode }) | (CodeInput.Options & { type: FieldType.CODE; action?: never });

        type Props = Options & UI.Field.Input.Contract;

        type Result = JSX.Element;

        type Signature = (props: Props) => Result;
    }
}
