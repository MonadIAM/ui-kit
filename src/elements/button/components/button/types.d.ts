import { Button as ButtonPrimitive } from "@base-ui/react/button";
import type { ReactNode } from "react";

import type { ButtonSize, ButtonVariant } from "~ui/enums";

declare global {
    namespace UI.Button {
        type Props = ButtonPrimitive.Props & {
            variant?: ButtonVariant;
            size?: ButtonSize;
            loading?: boolean;
            icon?: ReactNode;
        };
    }
}
