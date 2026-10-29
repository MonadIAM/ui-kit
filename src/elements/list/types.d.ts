import type { ComponentPropsWithRef, ReactNode } from "react";

declare global {
    namespace UI.List {
        type KeyedItem = { id: string };

        type Item = KeyedItem & {
            showLabel?: boolean;
            action?: ReactNode;
            content: ReactNode;
            label: string;
        };

        type Virtualization = {
            estimateSize?: number;
            hasMore?: boolean;
            loading?: boolean;
            height?: number;

            onEndReached?(): void;
        };

        type Props = Omit<ComponentPropsWithRef<"ul">, "children"> &
            Virtualization & {
                items: Item[];
            };

        namespace Custom {
            type Props<Item extends KeyedItem> = Omit<ComponentPropsWithRef<"ul">, "children"> &
                Virtualization & {
                    items: Item[];

                    renderItem(item: Item): ReactNode;
                };
        }
    }
}
