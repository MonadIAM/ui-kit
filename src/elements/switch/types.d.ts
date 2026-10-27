import type { Switch as Primitive } from "@base-ui/react/switch";

declare global {
    namespace UI.Switch {
        type Props = Omit<Primitive.Root.Props, "children" | "render"> & {
            showLabel?: boolean;
            label: string;
        };
    }
}
