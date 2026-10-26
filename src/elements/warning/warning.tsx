import { cn } from "cn";

import { CircleAlertIcon } from "~ui/assets/icons";
import { Flex } from "~ui/elements/flex";

import { warningStyles } from "./styles";

export function Warning({ title, children, className, ...props }: UI.Warning.Props) {
    return (
        <Flex.Row role="note" gap="0.75rem" className={cn(warningStyles.root, className)} {...props}>
            <CircleAlertIcon aria-hidden="true" className={warningStyles.icon} />
            <Flex.Col gap="0.25rem">
                <p className={warningStyles.title}>{title}</p>
                <p className={warningStyles.description}>{children}</p>
            </Flex.Col>
        </Flex.Row>
    );
}
