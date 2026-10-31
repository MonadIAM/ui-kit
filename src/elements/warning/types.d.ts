import type { ComponentProps, ReactNode } from "react";

import type { WarningTone } from "~ui/enums";

declare global {
    namespace UI.Warning {
        type Props = Omit<ComponentProps<"div">, "title"> & {
            title: ReactNode;
            tone?: WarningTone;
        };
    }
}
