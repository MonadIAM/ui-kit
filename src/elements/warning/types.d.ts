import type { ComponentProps, ReactNode } from "react";

declare global {
    namespace UI.Warning {
        type Props = Omit<ComponentProps<"div">, "title"> & {
            title: ReactNode;
        };
    }
}
