import type { ComponentProps, FunctionComponent, JSX, ReactNode } from "react";

declare global {
    namespace UI.Form {
        type Props = Omit<ComponentProps<"form">, "children" | "onSubmit" | "onReset"> & {
            children: ReactNode | ((state: State) => ReactNode);
            legend?: ReactNode;
            disabled?: boolean;
            form: Contract;
        };

        type Result = JSX.Element;

        type Signature = (props: Props) => Result;

        type State = {
            isSubmitting: boolean;
        };

        interface Contract {
            Subscribe: Subscribe.Signature;
            handleSubmit: Submit.Signature;
            reset: Reset.Signature;
        }

        namespace Subscribe {
            type Props<T> = {
                children(value: T): ReactNode;
                selector(state: State): T;
            };

            type Result = ReturnType<FunctionComponent>;

            type Signature = <T>(props: Props<T>) => Result;
        }

        namespace Submit {
            type Result = Promise<void>;

            type Signature = () => Result;
        }

        namespace Reset {
            type Result = void;

            type Signature = () => Result;
        }
    }
}
