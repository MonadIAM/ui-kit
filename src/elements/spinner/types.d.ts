import { ComponentProps } from "react";

declare global {
    namespace UI.Spinner {
        type Props = Omit<ComponentProps<"span">, "children"> & {
            variant?: "area" | "inline";
        };
    }
}
