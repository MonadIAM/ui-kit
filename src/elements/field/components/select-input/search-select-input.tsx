import { Combobox } from "@base-ui/react/combobox";
import { useMemo } from "react";

import { CheckIcon, ChevronDownIcon } from "~ui/assets/icons";
import { Flex } from "~ui/elements/flex";
import { Text } from "~ui/elements/text";

import { selectInputStyles } from "./styles";

export const SearchSelectInput: UI.Field.SelectInput.Search.Signature = ({
    onValueChange,
    onBlur,
    searchLabel,
    emptyLabel,
    disabled,
    options,
    value,
    label,
    name,
}) => {
    const { contains } = Combobox.useFilter();
    const items = useMemo(
        () => Combobox.createItems(options, { getValue: (option) => option.value, getLabel: (option) => option.label }),
        [options],
    );

    return (
        <Combobox.Root
            items={items}
            value={value}
            disabled={disabled}
            name={name}
            onValueChange={(selected) => onValueChange?.(selected ?? "")}
            filter={(option, query) => contains([option.label, option.value, option.description].join(" "), query)}>
            <Combobox.Trigger
                data-slot="field-control"
                aria-label={label}
                onBlur={onBlur}
                className={selectInputStyles.trigger}>
                <Text.Span className={selectInputStyles.value}>
                    <Combobox.Value />
                </Text.Span>
                <ChevronDownIcon aria-hidden="true" className={selectInputStyles.icon} />
            </Combobox.Trigger>
            <Combobox.Portal>
                <Combobox.Positioner
                    sideOffset={6}
                    align="start"
                    collisionPadding={12}
                    className={selectInputStyles.positioner}>
                    <Combobox.Popup className={selectInputStyles.popup}>
                        <div className={selectInputStyles.search}>
                            <Combobox.Input
                                aria-label={searchLabel}
                                placeholder={searchLabel}
                                className={selectInputStyles.input}
                            />
                        </div>
                        <Combobox.Empty className={selectInputStyles.empty}>{emptyLabel}</Combobox.Empty>
                        <Combobox.List className={selectInputStyles.list}>
                            {(option: UI.Field.SelectInput.Option) => (
                                <Combobox.Item key={option.value} value={option.value} className={selectInputStyles.item}>
                                    <Flex.Col gap="0.125rem" className={selectInputStyles.content}>
                                        <Text.Span>{option.label}</Text.Span>
                                        {option.description && (
                                            <Text.Span className={selectInputStyles.description}>
                                                {option.description}
                                            </Text.Span>
                                        )}
                                    </Flex.Col>
                                    <Combobox.ItemIndicator className={selectInputStyles.indicator}>
                                        <CheckIcon aria-hidden="true" className={selectInputStyles.icon} />
                                    </Combobox.ItemIndicator>
                                </Combobox.Item>
                            )}
                        </Combobox.List>
                    </Combobox.Popup>
                </Combobox.Positioner>
            </Combobox.Portal>
        </Combobox.Root>
    );
};
