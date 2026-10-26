import { ComponentProps } from "react";

declare global {
    namespace UI.LanguageSelect {
        type Props = Omit<ComponentProps<"button">, "children" | "value" | "defaultValue" | "onChange" | "aria-label"> & {
            label: string;
            value: string;
            options: {
                value: string;
                label: string;
            }[];

            onValueChange(value: string): void;
        };
    }
}
