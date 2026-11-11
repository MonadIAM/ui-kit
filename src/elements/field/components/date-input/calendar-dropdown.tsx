import { Field } from "@base-ui/react/field";
import { Select } from "@base-ui/react/select";
import { useDayPicker, type DropdownProps } from "react-day-picker";

import { CheckIcon, ChevronDownIcon } from "~ui/assets/icons";

import { selectInputStyles } from "../select-input/styles";
import { calendarDropdownStyles } from "./styles";

function CalendarDropdown({ options = [], value, disabled, "aria-label": label, part }: UI.Field.DateInput.DropdownProps) {
    const { months, goToMonth } = useDayPicker();

    return (
        <Field.Root className="min-w-0">
            <Select.Root
                modal={false}
                items={options}
                value={Number(value)}
                disabled={disabled}
                onValueChange={(selected) => {
                    if (selected !== null) {
                        const month = months[0].date;
                        goToMonth(
                            part === "month"
                                ? new Date(month.getFullYear(), selected, 1)
                                : new Date(selected, month.getMonth(), 1),
                        );
                    }
                }}>
                <Select.Trigger aria-label={label} className={calendarDropdownStyles.trigger}>
                    <Select.Value className={selectInputStyles.value} />
                    <Select.Icon>
                        <ChevronDownIcon aria-hidden="true" className={calendarDropdownStyles.icon} />
                    </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Positioner
                        sideOffset={4}
                        align="start"
                        alignItemWithTrigger={false}
                        collisionPadding={12}
                        className={calendarDropdownStyles.positioner}>
                        <Select.Popup className={calendarDropdownStyles.popup}>
                            <Select.List className={selectInputStyles.list}>
                                {options.map((option) => (
                                    <Select.Item
                                        key={option.value}
                                        value={option.value}
                                        disabled={option.disabled}
                                        className={calendarDropdownStyles.item}>
                                        <Select.ItemText>{option.label}</Select.ItemText>
                                        <Select.ItemIndicator>
                                            <CheckIcon aria-hidden="true" className={calendarDropdownStyles.icon} />
                                        </Select.ItemIndicator>
                                    </Select.Item>
                                ))}
                            </Select.List>
                        </Select.Popup>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>
        </Field.Root>
    );
}

export function CalendarMonthDropdown(props: DropdownProps) {
    return <CalendarDropdown {...props} part="month" />;
}

export function CalendarYearDropdown(props: DropdownProps) {
    return <CalendarDropdown {...props} part="year" />;
}
