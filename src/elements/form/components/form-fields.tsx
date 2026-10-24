import { formSetVariants, formLegendVariants, formGroupVariants } from "../variants";

export function FormFields({ legend, disabled, children }: UI.Form.Fields.Props) {
    return (
        <fieldset data-slot="field-set" className={formSetVariants()} disabled={disabled}>
            {legend !== undefined && legend !== null && (
                <legend data-slot="field-legend" data-variant="legend" className={formLegendVariants()}>
                    {legend}
                </legend>
            )}
            <div data-slot="field-group" className={formGroupVariants()}>
                {children}
            </div>
        </fieldset>
    );
}
