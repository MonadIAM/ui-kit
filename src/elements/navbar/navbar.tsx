import { cn } from "cn";

import { FlexAlignment, FlexJustification, FlexWrap } from "~ui/enums";
import { Flex } from "~ui/elements/flex";

import { navbarVariants, navbarBrandStyles, navbarActionsStyles } from "./styles";

export function Navbar({ brand, actions, className, appearance, ...props }: UI.Navbar.Props) {
    return (
        <Flex.Row
            render={<header {...props} />}
            align={FlexAlignment.CENTER}
            wrap={FlexWrap.WRAP}
            gapX="1.25rem"
            gapY="0.75rem"
            className={cn(navbarVariants({ appearance }), className)}>
            <div className={navbarBrandStyles}>{brand}</div>
            <Flex.Row
                align={FlexAlignment.CENTER}
                justify={FlexJustification.END}
                wrap={FlexWrap.WRAP}
                className={navbarActionsStyles}>
                {actions}
            </Flex.Row>
        </Flex.Row>
    );
}
