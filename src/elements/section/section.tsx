import { useId } from "react";
import { cn } from "cn";

import { FlexAlignment, FlexJustification, TextSize, TextTone } from "~ui/enums";
import { Flex } from "~ui/elements/flex";
import { Text } from "~ui/elements/text";

import { sectionStyles } from "./styles";

export function Section({ title, description, actions, children, className, ...props }: UI.Section.Props) {
    const id = useId();

    return (
        <Flex.Col
            render={<section {...props} />}
            gap="1rem"
            aria-labelledby={id}
            className={cn(sectionStyles.root, className)}>
            <Flex.Row render={<header />} align={FlexAlignment.CENTER} justify={FlexJustification.BETWEEN} gap="1rem">
                <Flex.Col gap="0.25rem">
                    <Text.H2 id={id} size={TextSize.MD} className={sectionStyles.title}>
                        {title}
                    </Text.H2>
                    {description && (
                        <Text.P tone={TextTone.MUTED} className={sectionStyles.description}>
                            {description}
                        </Text.P>
                    )}
                </Flex.Col>
                {actions && <Flex.Row gap="0.5rem">{actions}</Flex.Row>}
            </Flex.Row>
            {children}
        </Flex.Col>
    );
}
