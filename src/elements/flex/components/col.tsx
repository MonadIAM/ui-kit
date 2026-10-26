import { useRender } from "@base-ui/react/use-render";
import { cn } from "cn";

import { flexVariants, flexColStyles } from "../styles";

export function FlexCol({ render, ref, align, justify, wrap, gap, gapX, gapY, className, style, ...props }: UI.Flex.Props) {
    return useRender({
        render,
        ref,
        props: {
            "data-slot": "flex-col",
            ...props,
            className: cn(flexVariants({ align, justify, wrap }), flexColStyles, className),
            style: { columnGap: gapX ?? gap, rowGap: gapY ?? gap, ...style },
        },
    });
}
