import { Select as SelectPrimitive } from "@base-ui/react/select";

import { CheckIcon, ChevronDownIcon } from "~ui/assets/icons";
import { Flex } from "~ui/elements/flex";
import { Text } from "~ui/elements/text";

import { SearchSelectInput } from "./search-select-input";
import { selectInputStyles } from "./styles";

export const SelectInput: UI.Field.SelectInput.Signature = (props) => {
    if (props.searchable) {
        return <SearchSelectInput {...props} />;
    }

    const { options, value, label, disabled, name, onValueChange, onBlur } = props;

    return (
        <SelectPrimitive.Root
            items={options}
            value={value}
            name={name}
            disabled={disabled}
            onValueChange={(selected) => onValueChange?.(selected ?? "")}>
            <SelectPrimitive.Trigger
                data-slot="field-control"
                aria-label={label}
                onBlur={onBlur}
                className={selectInputStyles.trigger}>
                <SelectPrimitive.Value className={selectInputStyles.value} />
                <SelectPrimitive.Icon className={selectInputStyles.icon}>
                    <ChevronDownIcon aria-hidden="true" />
                </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>
            <SelectPrimitive.Portal>
                <SelectPrimitive.Positioner
                    sideOffset={6}
                    align="start"
                    alignItemWithTrigger={false}
                    collisionPadding={12}
                    className={selectInputStyles.positioner}>
                    <SelectPrimitive.Popup className={selectInputStyles.popup}>
                        <SelectPrimitive.List className={selectInputStyles.list}>
                            {options.map((option) => (
                                <SelectPrimitive.Item
                                    key={option.value}
                                    value={option.value}
                                    className={selectInputStyles.item}>
                                    <Flex.Col gap="0.125rem" className={selectInputStyles.content}>
                                        <SelectPrimitive.ItemText render={<Text.Span />}>
                                            {option.label}
                                        </SelectPrimitive.ItemText>
                                        {option.description && (
                                            <Text.Span className={selectInputStyles.description}>
                                                {option.description}
                                            </Text.Span>
                                        )}
                                    </Flex.Col>
                                    <SelectPrimitive.ItemIndicator className={selectInputStyles.indicator}>
                                        <CheckIcon aria-hidden="true" className={selectInputStyles.icon} />
                                    </SelectPrimitive.ItemIndicator>
                                </SelectPrimitive.Item>
                            ))}
                        </SelectPrimitive.List>
                    </SelectPrimitive.Popup>
                </SelectPrimitive.Positioner>
            </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
    );
};
