import { cn } from "cn";

import { FlexAlignment, TextTone } from "~ui/enums";
import { Flex } from "~ui/elements/flex";
import { Text } from "~ui/elements/text";

import { ListContent } from "./content";
import { listStyles } from "./styles";

export function BaseList({ items, className, ...props }: UI.List.Props) {
    return (
        <ListContent
            {...props}
            items={items}
            className={cn(listStyles.root, className)}
            renderItem={({ label, showLabel = true, content, action }) => (
                <div data-label-visible={showLabel} className={listStyles.row}>
                    <Text.Span tone={TextTone.MUTED} className={cn(!showLabel && listStyles.labelHidden)}>
                        {label}
                    </Text.Span>
                    <Flex.Row align={FlexAlignment.CENTER} gap="0.5rem" className={listStyles.body}>
                        <Flex.Col className={listStyles.content}>{content}</Flex.Col>
                        {action}
                    </Flex.Row>
                </div>
            )}
        />
    );
}
