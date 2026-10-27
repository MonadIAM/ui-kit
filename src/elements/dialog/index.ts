import { Dialog as Primitive } from "@base-ui/react/dialog";

import { DialogContent } from "./dialog";

export const Dialog = Object.assign(Primitive.Root, {
    Trigger: Primitive.Trigger,
    Close: Primitive.Close,
    Content: DialogContent,
});
