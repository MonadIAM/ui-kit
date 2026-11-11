import type { JSX } from "react";
import type { DropdownProps as CalendarDropdownProps } from "react-day-picker";

declare global {
    namespace UI.Field.DateInput {
        type DropdownProps = CalendarDropdownProps & { part: "month" | "year" };
        type Options = {
            label: string;
            locale: string;
            placeholder: string;
            clearLabel: string;
            disabled?: boolean;
            min?: Date;
            max?: Date;
        };
        type Props = Options & UI.Field.Input.Contract;
        type Signature = (props: Props) => JSX.Element;
    }
}
