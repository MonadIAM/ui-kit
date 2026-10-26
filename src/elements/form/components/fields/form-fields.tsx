import { Fieldset } from "@base-ui/react/fieldset";
import { useSelector } from "@tanstack/react-form";
import { cn } from "cn";

import { Flex } from "~ui/elements/flex";
import { useFormContext } from "~ui/elements/form/context";

import { formFieldsStyles, formLegendStyles } from "./styles";

export const FormFields: UI.Form.Fields.Signature = ({ legend, disabled = false, className, children, ...props }) => {
    const form = useFormContext();
    const isSubmitting = useSelector(form.store, (state) => state.isSubmitting);

    return (
        <Fieldset.Root
            render={<Flex.Col render={<fieldset />} />}
            {...props}
            data-slot="field-set"
            className={cn(formFieldsStyles, className)}
            disabled={disabled || isSubmitting}>
            {legend !== undefined && legend !== null && (
                <Fieldset.Legend data-slot="field-legend" data-variant="legend" className={formLegendStyles}>
                    {legend}
                </Fieldset.Legend>
            )}
            {children}
        </Fieldset.Root>
    );
};
