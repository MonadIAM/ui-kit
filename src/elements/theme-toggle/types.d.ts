import type { ThemeMode } from "~ui/enums";

declare global {
    namespace UI.ThemeToggle {
        type Props = {
            theme: ThemeMode;
            label: string;

            onToggle(): void;
        };
    }
}
