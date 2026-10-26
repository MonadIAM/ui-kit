import { ComponentProps } from "react";

import type { SpinnerVariant } from "~ui/enums";

declare global {
    namespace UI.Spinner {
        type Props = Omit<ComponentProps<"span">, "children"> & {
            variant?: SpinnerVariant;
        };
    }
}
