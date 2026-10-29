import { Popover as Primitive } from "@base-ui/react/popover";
import { cn } from "cn";

import { popoverStyles } from "./styles";

export function PopoverContent({ children, className, align = "end", ...props }: UI.Popover.Content.Props) {
    return (
        <Primitive.Portal>
            <Primitive.Positioner align={align} sideOffset={12} collisionPadding={16} className={popoverStyles.positioner}>
                <Primitive.Popup {...props} className={cn(popoverStyles.popup, className)}>
                    {children}
                </Primitive.Popup>
            </Primitive.Positioner>
        </Primitive.Portal>
    );
}
