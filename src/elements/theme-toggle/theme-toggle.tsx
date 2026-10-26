import { SunIcon, MoonIcon } from "~ui/assets/icons";
import { ButtonSize, ButtonVariant, ThemeMode } from "~ui/enums";

import { themeToggleStyles } from "./styles";
import { Button } from "../button";

export function ThemeToggle({ theme, label, onToggle }: UI.ThemeToggle.Props) {
    const ThemeIcon = theme === ThemeMode.DARK ? SunIcon : MoonIcon;

    return (
        <Button
            type="button"
            variant={ButtonVariant.GHOST}
            size={ButtonSize.ICON}
            aria-label={label}
            title={label}
            onClick={onToggle}>
            <ThemeIcon aria-hidden="true" className={themeToggleStyles} />
        </Button>
    );
}
