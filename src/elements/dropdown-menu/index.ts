import { Menu } from "@base-ui/react/menu";

import { DropdownMenuSeparator } from "./components/separator";
import { DropdownMenuLinkItem } from "./components/link-item";
import { DropdownMenuContent } from "./components/content";
import { DropdownMenuItem } from "./components/item";

export const DropdownMenu = Object.assign(Menu.Root, {
    Separator: DropdownMenuSeparator,
    LinkItem: DropdownMenuLinkItem,
    Content: DropdownMenuContent,
    Item: DropdownMenuItem,
    Trigger: Menu.Trigger,
    GroupLabel: Menu.GroupLabel,
    Group: Menu.Group,
});
