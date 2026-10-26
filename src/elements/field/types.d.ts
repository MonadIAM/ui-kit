import type {
    AnyFormApi,
    DeepKeys,
    DeepKeysOfType,
    DeepValue,
    FieldValidateOrFn,
    FieldAsyncValidateOrFn,
    FieldValidators,
} from "@tanstack/react-form";

declare global {
    namespace UI.Field.Binding {
        type Values<TForm extends AnyFormApi> = TForm["state"]["values"];

        type Name<TForm extends AnyFormApi, TValue> = DeepKeysOfType<Values<TForm>, TValue>;

        type Value<TForm extends AnyFormApi, TName extends DeepKeys<Values<TForm>>> = DeepValue<Values<TForm>, TName>;

        type Props<TForm extends AnyFormApi, TName extends DeepKeys<Values<TForm>>> = {
            form: TForm;
            name: TName;
            validators?: Validators<TForm, TName>;
        };

        type Validators<TForm extends AnyFormApi, TName extends DeepKeys<Values<TForm>>> = FieldValidators<
            Values<TForm>,
            TName,
            Value<TForm, TName>,
            Validate.Sync<TForm, TName>,
            Validate.Sync<TForm, TName>,
            Validate.Async<TForm, TName>,
            Validate.Sync<TForm, TName>,
            Validate.Async<TForm, TName>,
            Validate.Sync<TForm, TName>,
            Validate.Async<TForm, TName>,
            Validate.Sync<TForm, TName>,
            Validate.Async<TForm, TName>
        >;

        namespace Validate {
            type Sync<TForm extends AnyFormApi, TName extends DeepKeys<Values<TForm>>> = Optional<
                FieldValidateOrFn<Values<TForm>, TName, Value<TForm, TName>>
            >;

            type Async<TForm extends AnyFormApi, TName extends DeepKeys<Values<TForm>>> = Optional<
                FieldAsyncValidateOrFn<Values<TForm>, TName, Value<TForm, TName>>
            >;
        }
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
}
