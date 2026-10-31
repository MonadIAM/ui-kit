import type { ReactNode } from "react";

declare global {
    namespace UI.DangerZone {
        type Item = {
            id: string;
            title: string;
            description: string;
            action: ReactNode;
        };

        type Props = {
            title: string;
            items: Item[];
            actions?: ReactNode;
            children?: ReactNode;
        };
    }
}
