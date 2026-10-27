import type { ComponentProps } from "react";

import type { BadgeTone } from "~ui/enums";

declare global {
    namespace UI.Badge {
        type Props = ComponentProps<"span"> & {
            tone?: BadgeTone;
        };
    }
}
