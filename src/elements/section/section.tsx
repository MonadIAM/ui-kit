import { useId } from "react";
import { cn } from "cn";

import { TextSize, TextTone } from "~ui/enums";
import { Flex } from "~ui/elements/flex";
import { Text } from "~ui/elements/text";

import { sectionStyles } from "./styles";

export function Section({ title, description, children, className, ...props }: UI.Section.Props) {
    const id = useId();

    return (
        <Flex.Col
            render={<section {...props} />}
            gap="1rem"
            aria-labelledby={id}
            className={cn(sectionStyles.root, className)}>
            <Flex.Col render={<header />} gap="0.25rem">
                <Text.H2 id={id} size={TextSize.MD} className={sectionStyles.title}>
                    {title}
                </Text.H2>
                {description && (
                    <Text.P tone={TextTone.MUTED} className={sectionStyles.description}>
                        {description}
                    </Text.P>
                )}
            </Flex.Col>
            {children}
        </Flex.Col>
    );
}
