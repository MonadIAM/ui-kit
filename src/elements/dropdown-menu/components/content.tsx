import { Menu } from "@base-ui/react/menu";
import { cn } from "cn";

import { menuStyles } from "../styles";

export function DropdownMenuContent({ children, className, align = "end", ...props }: UI.DropdownMenu.Content.Props) {
    return (
        <Menu.Portal>
            <Menu.Positioner align={align} sideOffset={8} collisionPadding={12} className={menuStyles.positioner}>
                <Menu.Popup {...props} className={cn(menuStyles.popup, className)}>
                    {children}
                </Menu.Popup>
            </Menu.Positioner>
        </Menu.Portal>
    );
}
