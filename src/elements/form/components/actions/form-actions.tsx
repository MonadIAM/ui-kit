import { cn } from "cn";

import { FlexAlignment, FlexWrap, FormAlignment, FormDirection, FormSpacing } from "~ui/enums";
import { useFormContext } from "~ui/elements/form/context";
import { Flex } from "~ui/elements/flex";

import { formActionsVariants, formActionsGap, formActionsJustification } from "./styles";

export const FormActions: UI.Form.Actions.Signature = ({
    direction = FormDirection.VERTICAL,
    gap = FormSpacing.MEDIUM,
    spacing,
    align = FormAlignment.START,
    className,
    ...props
}) => {
    useFormContext();

    const horizontal = direction === FormDirection.HORIZONTAL;
    const Component = horizontal ? Flex.Row : Flex.Col;

    return (
        <Component
            {...props}
            data-slot="form-actions"
            gap={formActionsGap[gap]}
            justify={formActionsJustification[align]}
            align={horizontal ? FlexAlignment.CENTER : undefined}
            wrap={horizontal ? FlexWrap.WRAP : undefined}
            className={cn(formActionsVariants({ spacing }), className)}
        />
    );
};
