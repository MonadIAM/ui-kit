import { Popover } from "@base-ui/react/popover";
import { DayPicker } from "react-day-picker";
import { enGB, ru } from "react-day-picker/locale";
import { useState } from "react";

import { CalendarIcon } from "~ui/assets/icons";

import { calendarStyles, dateInputStyles } from "./styles";
import { CalendarMonthDropdown, CalendarYearDropdown } from "./calendar-dropdown";

export const DateInput: UI.Field.DateInput.Signature = ({
    value,
    label,
    onValueChange,
    onBlur,
    locale,
    placeholder,
    clearLabel,
    disabled,
    min,
    max,
}) => {
    const [open, setOpen] = useState(false);
    const selected = value ? new Date(`${value}T00:00:00`) : undefined;
    const validDate = selected && !Number.isNaN(selected.getTime()) ? selected : undefined;

    const selectDate = (date?: Date) => {
        // Preserve the calendar day without converting it to UTC.
        const serialized = date
            ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
            : "";
        onValueChange?.(serialized);
        setOpen(false);
    };

    return (
        <Popover.Root open={open} onOpenChange={setOpen}>
            <Popover.Trigger
                type="button"
                aria-label={label}
                data-slot="field-control"
                data-empty={!validDate}
                disabled={disabled}
                onBlur={onBlur}
                className={dateInputStyles.trigger}>
                <span className={dateInputStyles.caption}>
                    {validDate
                        ? validDate.toLocaleDateString(locale, { day: "numeric", month: "short", year: "numeric" })
                        : placeholder}
                </span>
                <CalendarIcon aria-hidden="true" className={dateInputStyles.icon} />
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Positioner
                    sideOffset={6}
                    align="start"
                    collisionPadding={12}
                    className={dateInputStyles.positioner}>
                    <Popover.Popup aria-label={label} className={dateInputStyles.popup}>
                        <DayPicker
                            mode="single"
                            locale={locale.startsWith("ru") ? ru : enGB}
                            selected={validDate}
                            onSelect={selectDate}
                            defaultMonth={validDate ?? max}
                            startMonth={min ?? new Date(1900, 0)}
                            endMonth={max ?? new Date(new Date().getFullYear() + 100, 11)}
                            disabled={[...(min ? [{ before: min }] : []), ...(max ? [{ after: max }] : [])]}
                            showOutsideDays
                            captionLayout="dropdown"
                            autoFocus
                            className={dateInputStyles.calendar}
                            classNames={calendarStyles}
                            components={{ MonthsDropdown: CalendarMonthDropdown, YearsDropdown: CalendarYearDropdown }}
                        />
                        <div className={dateInputStyles.footer}>
                            <button type="button" className={dateInputStyles.clear} onClick={() => selectDate()}>
                                {clearLabel}
                            </button>
                        </div>
                    </Popover.Popup>
                </Popover.Positioner>
            </Popover.Portal>
        </Popover.Root>
    );
};
