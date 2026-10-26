import { Fieldset } from "@base-ui/react/fieldset";

import { formSetStyles, formLegendStyles, formGroupStyles } from "./styles";

export const FormFields: UI.Form.Fields.Signature = ({ legend, disabled, children }) => {
    return (
        <Fieldset.Root data-slot="field-set" className={formSetStyles} disabled={disabled}>
            {legend !== undefined && legend !== null && (
                <Fieldset.Legend data-slot="field-legend" data-variant="legend" className={formLegendStyles}>
                    {legend}
                </Fieldset.Legend>
            )}
            <div data-slot="field-group" className={formGroupStyles}>
                {children}
            </div>
        </Fieldset.Root>
    );
};
