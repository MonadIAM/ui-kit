import type { ComponentPropsWithRef, ReactNode } from "react";

declare global {
    namespace UI.List {
        type Item = {
            id: string;
            content: ReactNode;
            label: string;
            showLabel?: boolean;
            action?: ReactNode;
        };

        type Props = Omit<ComponentPropsWithRef<"ul">, "children"> & {
            items: Item[];
        };
    }
}
