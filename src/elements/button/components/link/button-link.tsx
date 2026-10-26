import { cn } from "cn";

import { ButtonVariant } from "~ui/enums";

import { BaseButton } from "../button/button";
import { buttonLinkStyles } from "./styles";

export const ButtonLink: UI.Button.Link.Signature = ({ className, ...props }) => (
    <BaseButton
        {...props}
        type="button"
        variant={ButtonVariant.LINK}
        data-slot="button-link"
        className={cn(buttonLinkStyles, className)}
    />
);
