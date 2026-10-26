import { cn } from "cn";

import { formActionsVariants } from "./styles";

export const FormActions: UI.Form.Actions.Signature = ({ direction, gap, spacing, align, className, ...props }) => {
    return (
        <div
            {...props}
            data-slot="form-actions"
            className={cn(formActionsVariants({ direction, gap, spacing, align }), className)}
        />
    );
};
