import { FormFields } from "./components/fields";

export const FormRoot: UI.Form.Signature = ({ form, legend, disabled = false, children, ...props }) => {
    return (
        <form
            noValidate
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
};
