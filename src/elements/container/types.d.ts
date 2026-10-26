import type { useRender } from "@base-ui/react/use-render";

declare global {
    namespace UI.Container {
        type Props = useRender.ComponentProps<"div">;
    }
}
