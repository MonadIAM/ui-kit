import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { cn } from "cn";

import { FlexAlignment } from "~ui/enums";
import { Flex } from "~ui/elements/flex";
import { Text } from "~ui/elements/text";

import { radioStyles } from "./styles";

export const BaseRadio: UI.Radio.Signature = ({ label, preview, showLabel = true, className, ...props }) => {
    const content = (
        <>
            <RadioPrimitive.Root {...props} className={radioStyles.control}>
                <RadioPrimitive.Indicator className={radioStyles.indicator} />
            </RadioPrimitive.Root>
            <Text.Span className={cn(!showLabel && radioStyles.labelHidden)}>{label}</Text.Span>
        </>
    );

    if (preview) {
        return (
            <Flex.Col render={<label />} gap="0.5rem" className={cn(radioStyles.label, radioStyles.card, className)}>
                <span aria-hidden="true" className={radioStyles.preview}>
                    {preview}
                </span>
                <Flex.Row render={<span />} align={FlexAlignment.CENTER} gap="0.5rem">
                    {content}
                </Flex.Row>
            </Flex.Col>
        );
    }

    return (
        <Flex.Row render={<label />} align={FlexAlignment.CENTER} gap="0.5rem" className={cn(radioStyles.label, className)}>
            {content}
        </Flex.Row>
    );
};
