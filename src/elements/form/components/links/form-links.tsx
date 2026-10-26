import { Children } from "react";
import { cn } from "cn";

import { useFormContext } from "~ui/elements/form/context";

import { formLinksVariants } from "./styles";

export const FormLinks: UI.Form.Links.Signature = ({ gap, spacing, align, className, children, ...props }) => {
    useFormContext();

    return (
        <ul {...props} data-slot="form-links" className={cn(formLinksVariants({ gap, spacing, align }), className)}>
            {Children.toArray(children).map((child, index) => (
                <li key={index}>{child}</li>
            ))}
        </ul>
    );
};
