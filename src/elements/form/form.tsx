import { FormFields } from "./components/form-fields";

export function Form({ form, legend, disabled = false, children, ...props }: UI.Form.Props) {
    return (
        <form
            {...props}
            onSubmit={(event) => {
                event.preventDefault();
                void form.handleSubmit();
            }}
            onReset={(event) => {
                event.preventDefault();
                form.reset();
            }}>
            <form.Subscribe selector={(state) => state.isSubmitting}>
                {(isSubmitting) => (
                    <FormFields legend={legend} disabled={disabled || isSubmitting}>
                        {typeof children === "function" ? children({ isSubmitting }) : children}
                    </FormFields>
                )}
            </form.Subscribe>
        </form>
    );
}
