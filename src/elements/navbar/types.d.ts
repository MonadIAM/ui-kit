import { ComponentProps, ReactNode } from "react";

import type { NavbarAppearance } from "~ui/enums";

declare global {
    namespace UI.Navbar {
        type Props = Omit<ComponentProps<"header">, "children"> & {
            appearance?: NavbarAppearance;
            actions?: ReactNode;
            brand: ReactNode;
        };
    }
}
