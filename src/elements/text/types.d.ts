import type { ComponentProps, ElementType } from "react";

import type { TextSize, TextWeight, TextTone, TextAlign } from "~ui/enums";

declare global {
    namespace UI.Text {
        type Props<Element extends ElementType> = ComponentProps<Element> & {
            weight?: TextWeight;
            align?: TextAlign;
            tone?: TextTone;
            size?: TextSize;
        };
    }
}
