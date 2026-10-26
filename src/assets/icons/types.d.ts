declare module "*.svg?react" {
    import type { FunctionComponent, SVGProps } from "react";

    const Icon: FunctionComponent<SVGProps<SVGSVGElement>>;

    export default Icon;
}
