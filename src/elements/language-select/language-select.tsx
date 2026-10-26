import { Select } from "@base-ui/react/select";
import { cn } from "cn";

import { ChevronDownIcon, CheckIcon } from "~ui/assets/icons";

import {
    languageSelectStyles,
    languageSelectIconStyles,
    languageSelectPositionerStyles,
    languageSelectPopupStyles,
    languageSelectItemStyles,
    languageSelectIndicatorStyles,
} from "./styles";

export function LanguageSelect({
    label,
    options,
    value,
    onValueChange,
    className,
    disabled,
    ...props
}: UI.LanguageSelect.Props) {
    return (
        <Select.Root
            items={options}
            value={value}
            disabled={disabled}
            onValueChange={(language) => {
                if (language !== null) {
                    onValueChange(language);
                }
            }}>
            <Select.Trigger {...props} aria-label={label} className={cn(languageSelectStyles, className)}>
                <Select.Value />
                <Select.Icon>
                    <ChevronDownIcon aria-hidden="true" className={languageSelectIconStyles} />
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
                <Select.Positioner
                    align="end"
                    sideOffset={5}
                    alignItemWithTrigger={false}
                    className={languageSelectPositionerStyles}>
                    <Select.Popup className={languageSelectPopupStyles}>
                        <Select.List>
                            {options.map((option) => (
                                <Select.Item
                                    key={option.value}
                                    value={option.value}
                                    lang={option.value}
                                    className={languageSelectItemStyles}>
                                    <Select.ItemText>{option.label}</Select.ItemText>
                                    <Select.ItemIndicator className={languageSelectIndicatorStyles}>
                                        <CheckIcon aria-hidden="true" />
                                    </Select.ItemIndicator>
                                </Select.Item>
                            ))}
                        </Select.List>
                    </Select.Popup>
                </Select.Positioner>
            </Select.Portal>
        </Select.Root>
    );
}
