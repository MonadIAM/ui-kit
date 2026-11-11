import { Dialog as Primitive } from "@base-ui/react/dialog";

import { DialogContent, DialogActions } from "./dialog";

export const Dialog = Object.assign(Primitive.Root, {
    Trigger: Primitive.Trigger,
    Close: Primitive.Close,
    Content: DialogContent,
    Actions: DialogActions,
});
