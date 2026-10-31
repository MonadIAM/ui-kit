import { WarningTone } from "~ui/enums";

export const warningStyles = {
    content: "min-w-0 [overflow-wrap:anywhere] text-foreground",
    root: "rounded-lg border p-4",
    icon: "mt-0.5 size-5 shrink-0",
    tones: {
        [WarningTone.WARNING]: "border-orange-500/60 bg-orange-500/10 text-orange-600 dark:text-orange-400",
        [WarningTone.DANGER]: "border-destructive/60 bg-destructive/10 text-destructive",
    },
};
