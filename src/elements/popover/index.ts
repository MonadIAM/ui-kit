import { Popover as Primitive } from "@base-ui/react/popover";

import { PopoverContent } from "./popover";

export const Popover = Object.assign(Primitive.Root, {
    Trigger: Primitive.Trigger,
    Title: Primitive.Title,
    Content: PopoverContent,
});
