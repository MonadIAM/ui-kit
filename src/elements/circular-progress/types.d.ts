import type { ComponentProps, ReactNode } from "react";

declare global {
    namespace UI.CircularProgress {
        type Props = Omit<ComponentProps<"div">, "children"> & {
            value: number;
            label: string;
            children?: ReactNode;
        };
    }
}
