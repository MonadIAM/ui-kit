import { useRender } from "@base-ui/react/use-render";
import { cn } from "cn";

import { containerStyles } from "./styles";

export function Container({ render, ref, className, ...props }: UI.Container.Props) {
    return useRender({
        render,
        ref,
        props: {
            "data-slot": "container",
            ...props,
            className: cn(containerStyles, className),
        },
    });
}
