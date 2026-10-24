import { ComponentProps } from "react";

declare global {
    namespace UI.CenteredViewport {
        type Props = ComponentProps<"main">;
    }
}
