import type { ComponentPropsWithRef, ReactNode } from "react";

declare global {
    namespace UI.List.Columns {
        type Column = {
            id: string;
            label: string;
            width?: string;
            className?: string;
        };

        type Item = {
            id: string;
            cells: Record<string, ReactNode>;
        };

        type Props = Omit<ComponentPropsWithRef<"div">, "children"> &
            UI.List.Virtualization & {
                empty?: ReactNode;
                columns: Column[];
                label: string;
                items: Item[];
            };
    }
}
