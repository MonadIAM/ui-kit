import { formContext } from "./context";

export const FormRoot: UI.Form.Signature = ({ form, children, ...props }) => (
    <formContext.Provider value={form}>
        <form
            noValidate
            {...props}
            onSubmit={(event) => {
                event.preventDefault();
                form.handleSubmit();
            }}
            onReset={(event) => {
                event.preventDefault();
                form.reset();
            }}>
            {children}
        </form>
    </formContext.Provider>
);
