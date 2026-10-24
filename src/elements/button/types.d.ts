import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { VariantProps } from "class-variance-authority";

import { buttonVariants } from "./variants";

declare global {
    namespace UI.Button {
        type Props = ButtonPrimitive.Props &
            VariantProps<typeof buttonVariants> & {
                loading?: boolean;
            };
    }
}
