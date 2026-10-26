import { cn } from "cn";

import { navbarVariants, navbarBrandStyles, navbarActionsStyles } from "./styles";

export function Navbar({ brand, actions, className, appearance, ...props }: UI.Navbar.Props) {
    return (
        <header className={cn(navbarVariants({ appearance }), className)} {...props}>
            <div className={navbarBrandStyles}>{brand}</div>
            <div className={navbarActionsStyles}>{actions}</div>
        </header>
    );
}
