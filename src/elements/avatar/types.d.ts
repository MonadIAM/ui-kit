import { ComponentProps } from "react";

declare global {
    namespace UI.Avatar {
        type Props = Omit<ComponentProps<"span">, "children" | "role" | "aria-label"> & {
            name?: string;
            src?: string;
            label: string;
        };
    }
}
