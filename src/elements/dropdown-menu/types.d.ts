import type { Menu } from "@base-ui/react/menu";

declare global {
    namespace UI.DropdownMenu {
        namespace Content {
            type Props = Omit<Menu.Popup.Props, "className"> & {
                className?: string;
                align?: Menu.Positioner.Props["align"];
            };
        }

        namespace Item {
            type Props = Omit<Menu.Item.Props, "className"> & {
                className?: string;
                destructive?: boolean;
            };
        }

        namespace LinkItem {
            type Props = Omit<Menu.LinkItem.Props, "className"> & {
                className?: string;
            };
        }
    }
}
