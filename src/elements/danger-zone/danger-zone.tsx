import { TextSize, TextTone, TextWeight } from "~ui/enums";
import { Section } from "~ui/elements/section";
import { Flex } from "~ui/elements/flex";
import { Text } from "~ui/elements/text";

import { dangerZoneStyles } from "./styles";

export function DangerZone({ title, items, actions, children }: UI.DangerZone.Props) {
    return (
        <Section title={title} actions={actions} className={dangerZoneStyles.root}>
            <Flex.Col className={dangerZoneStyles.panel}>
                {children}
                {items.map((item) => (
                    <Flex.Row key={item.id} className={dangerZoneStyles.row}>
                        <Flex.Col gap="0.25rem" className={dangerZoneStyles.content}>
                            <Text.H3 size={TextSize.SM} weight={TextWeight.SEMIBOLD}>
                                {item.title}
                            </Text.H3>
                            <Text.P size={TextSize.SM} tone={TextTone.MUTED}>
                                {item.description}
                            </Text.P>
                        </Flex.Col>
                        <Flex.Row className={dangerZoneStyles.action}>{item.action}</Flex.Row>
                    </Flex.Row>
                ))}
            </Flex.Col>
        </Section>
    );
}
