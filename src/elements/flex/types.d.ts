import type { useRender } from "@base-ui/react/use-render";
import type { CSSProperties } from "react";

import type { FlexAlignment, FlexJustification, FlexWrap } from "~ui/enums";

declare global {
    namespace UI.Flex {
        type Props = useRender.ComponentProps<"div"> & {
            align?: FlexAlignment;
            justify?: FlexJustification;
            wrap?: FlexWrap;
            gap?: CSSProperties["gap"];
            gapX?: CSSProperties["columnGap"];
            gapY?: CSSProperties["rowGap"];
        };
    }
}
