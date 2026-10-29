import type { ComponentProps, ElementType } from "react";

import type { TextSize, TextWeight, TextTone, TextAlign, TextHyphens } from "~ui/enums";

declare global {
    namespace UI.Text {
        type Props<Element extends ElementType> = ComponentProps<Element> & {
            hyphens?: TextHyphens;
            weight?: TextWeight;
            align?: TextAlign;
            tone?: TextTone;
            size?: TextSize;
        };
    }
}
