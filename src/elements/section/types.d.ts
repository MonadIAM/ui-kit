import type { ComponentPropsWithRef, ReactNode } from "react";

declare global {
    namespace UI.Section {
        type Props = Omit<ComponentPropsWithRef<"section">, "title"> & {
            title: ReactNode;
            description?: ReactNode;
        };
    }
}
