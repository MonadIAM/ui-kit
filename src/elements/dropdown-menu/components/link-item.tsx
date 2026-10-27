import { Menu } from "@base-ui/react/menu";
import { cn } from "cn";

import { menuStyles } from "../styles";

export function DropdownMenuLinkItem({ className, ...props }: UI.DropdownMenu.LinkItem.Props) {
    return <Menu.LinkItem closeOnClick {...props} className={cn(menuStyles.item, menuStyles.itemDefault, className)} />;
}
