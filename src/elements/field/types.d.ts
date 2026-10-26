import type { JSX } from "react";

declare global {
    namespace UI.Field {
        type Props = Control.Options &
            Pick<Frame.Props, "label" | "orientation" | "invalidMessage"> & {
                field: Binding.Contract;
            };

        type Result = JSX.Element;

        type Signature = (props: Props) => Result;
    }

    namespace UI.Field.Input {
        interface Contract {
            value: string;

            onValueChange?: Change.Signature;
            onBlur?: Blur.Signature;
        }

        namespace Blur {
            type Result = void;

            type Signature = () => Result;
        }

        namespace Change {
            type Props = string;

            type Result = void;

            type Signature = (value: Props) => Result;
        }
    }

    namespace UI.Field.Binding {
        interface Contract {
            readonly name: string;
            readonly state: State;

            handleChange: Input.Change.Signature;
            handleBlur: Input.Blur.Signature;
        }

        type State = {
            value: string;
            meta: {
                isTouched: boolean;
                errors: unknown[];
                isDirty: boolean;
            };
        };
    }
}
