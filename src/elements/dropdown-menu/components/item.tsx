import { Menu } from "@base-ui/react/menu";
import { cn } from "cn";

import { menuStyles } from "../styles";

export function DropdownMenuItem({ className, destructive = false, ...props }: UI.DropdownMenu.Item.Props) {
    return (
        <Menu.Item
            {...props}
            className={cn(menuStyles.item, destructive ? menuStyles.itemDestructive : menuStyles.itemDefault, className)}
        />
    );
}
