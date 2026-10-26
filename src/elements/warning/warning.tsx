import { cn } from "cn";

import { CircleAlertIcon } from "~ui/assets/icons";
import { TextWeight, TextTone } from "~ui/enums";
import { Flex } from "~ui/elements/flex";
import { Text } from "~ui/elements/text";

import { warningStyles } from "./styles";

export function Warning({ title, children, className, ...props }: UI.Warning.Props) {
    return (
        <Flex.Row role="note" gap="0.75rem" className={cn(warningStyles.root, className)} {...props}>
            <CircleAlertIcon aria-hidden="true" className={warningStyles.icon} />
            <Flex.Col gap="0.25rem">
                <Text.P weight={TextWeight.SEMIBOLD}>{title}</Text.P>
                <Text.P tone={TextTone.MUTED}>{children}</Text.P>
            </Flex.Col>
        </Flex.Row>
    );
}
