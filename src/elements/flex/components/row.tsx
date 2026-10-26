import { useRender } from "@base-ui/react/use-render";
import { cn } from "cn";

import { flexVariants, flexRowStyles } from "../styles";

export function FlexRow({ render, ref, align, justify, wrap, gap, gapX, gapY, className, style, ...props }: UI.Flex.Props) {
    return useRender({
        render,
        ref,
        props: {
            "data-slot": "flex-row",
            ...props,
            className: cn(flexVariants({ align, justify, wrap }), flexRowStyles, className),
            style: { columnGap: gapX ?? gap, rowGap: gapY ?? gap, ...style },
        },
    });
}
