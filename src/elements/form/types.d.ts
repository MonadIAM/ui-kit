import { ComponentProps, FunctionComponent, ReactNode } from "react";

declare global {
    namespace UI.Form {
        type State = {
            isSubmitting: boolean;
        };

        interface Binding {
            Subscribe<TSelected>(props: {
                selector(state: State): TSelected;
                children(value: TSelected): ReactNode;
            }): ReturnType<FunctionComponent>;
            handleSubmit(): Promise<void>;
            reset(): void;
        }

        type Props = Omit<ComponentProps<"form">, "children" | "onSubmit" | "onReset"> & {
            children: ReactNode | ((state: State) => ReactNode);
            legend?: ReactNode;
            disabled?: boolean;
            form: Binding;
        };

        namespace Fields {
            type Props = {
                children: ReactNode;
                legend?: ReactNode;
                disabled: boolean;
            };
        }
    }
}
