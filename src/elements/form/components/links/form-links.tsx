import { Children } from "react";
import { cn } from "cn";

import { FormSpacing } from "~ui/enums";
import { Flex } from "~ui/elements/flex";
import { useFormContext } from "~ui/elements/form/context";

import { formLinksVariants, formLinksGap } from "./styles";

export const FormLinks: UI.Form.Links.Signature = ({
    gap = FormSpacing.SMALL,
    spacing,
    align,
    className,
    children,
    ...props
}) => {
    useFormContext();

    return (
        <Flex.Col
            render={<ul {...props} />}
            data-slot="form-links"
            gap={formLinksGap[gap]}
            className={cn(formLinksVariants({ spacing, align }), className)}>
            {Children.toArray(children).map((child, index) => (
                <li key={index}>{child}</li>
            ))}
        </Flex.Col>
    );
};
