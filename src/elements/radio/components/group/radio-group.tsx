import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import { useId } from "react";
import { cn } from "cn";

import { TextSize, TextWeight } from "~ui/enums";
import { Flex } from "~ui/elements/flex";
import { Text } from "~ui/elements/text";

import { radioGroupStyles } from "./styles";

export const RadioGroup: UI.Radio.Group.Signature = ({
    label,
    showLabel = true,
    className,
    onBlur,
    children,
    ...props
}) => {
    const labelId = useId();

    return (
        <Flex.Col gap="0.375rem">
            <Text.Span
                id={labelId}
                size={TextSize.XS}
                weight={TextWeight.MEDIUM}
                className={cn(radioGroupStyles.label, !showLabel && radioGroupStyles.labelHidden)}>
                {label}
            </Text.Span>
            <RadioGroupPrimitive
                {...props}
                aria-labelledby={labelId}
                className={cn(radioGroupStyles.root, className)}
                onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                        onBlur?.(event);
                    }
                }}>
                {children}
            </RadioGroupPrimitive>
        </Flex.Col>
    );
};
