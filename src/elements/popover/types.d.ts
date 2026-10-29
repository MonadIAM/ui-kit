import type { Popover as Primitive } from "@base-ui/react/popover";

declare global {
    namespace UI.Popover.Content {
        type Props = Omit<Primitive.Popup.Props, "className"> & {
            className?: string;
            align?: Primitive.Positioner.Props["align"];
        };
    }
}
