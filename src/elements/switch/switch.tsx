import { Switch as Primitive } from "@base-ui/react/switch";
import { cn } from "cn";

import { FlexAlignment, TextSize } from "~ui/enums";
import { Flex } from "~ui/elements/flex";
import { Text } from "~ui/elements/text";

import { switchStyles } from "./styles";

export function Switch({ label, showLabel = true, className, ...props }: UI.Switch.Props) {
    return (
        <Flex.Row render={<label />} align={FlexAlignment.CENTER} gap="0.5rem" className={switchStyles.label}>
            <Primitive.Root {...props} className={cn(switchStyles.root, className)}>
                <Primitive.Thumb className={switchStyles.thumb} />
            </Primitive.Root>
            <Text.Span size={TextSize.SM} className={cn(!showLabel && switchStyles.labelHidden)}>
                {label}
            </Text.Span>
        </Flex.Row>
    );
}
