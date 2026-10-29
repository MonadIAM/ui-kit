import type { Dialog as Primitive } from "@base-ui/react/dialog";
import type { ReactNode } from "react";

declare global {
    namespace UI.Dialog.Content {
        type Props = Omit<Primitive.Popup.Props, "title" | "className"> & {
            description?: ReactNode;
            showClose?: boolean;
            className?: string;
            closeLabel: string;
            title: ReactNode;
        };
    }
}
