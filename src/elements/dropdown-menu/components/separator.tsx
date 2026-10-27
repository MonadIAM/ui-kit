import { Menu } from "@base-ui/react/menu";

import { menuStyles } from "../styles";

export function DropdownMenuSeparator() {
    return <Menu.Separator className={menuStyles.separator} />;
}
