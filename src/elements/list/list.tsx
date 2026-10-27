import { cn } from "cn";

import { FlexAlignment, TextTone } from "~ui/enums";
import { Flex } from "~ui/elements/flex";
import { Text } from "~ui/elements/text";

import { listStyles } from "./styles";

export function BaseList({ items, className, ...props }: UI.List.Props) {
    return (
        <ul {...props} className={cn(listStyles.root, className)}>
            {items.map(({ id, label, showLabel = true, content, action }) => (
                <li key={id} data-label-visible={showLabel} className={listStyles.row}>
                    <Text.Span tone={TextTone.MUTED} className={cn(!showLabel && listStyles.labelHidden)}>
                        {label}
                    </Text.Span>
                    <Flex.Row align={FlexAlignment.CENTER} gap="0.5rem" className={listStyles.body}>
                        <Flex.Col className={listStyles.content}>{content}</Flex.Col>
                        {action}
                    </Flex.Row>
                </li>
            ))}
        </ul>
    );
}
