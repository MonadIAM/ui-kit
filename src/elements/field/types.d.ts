import type {
    DeepKeysOfType,
    DeepValue,
    FieldValidateOrFn,
    FieldAsyncValidateOrFn,
    FieldValidators,
    FormValidateOrFn,
    FormAsyncValidateOrFn,
    ReactFormApi,
} from "@tanstack/react-form";
import type { ComponentProps, JSX, ReactNode } from "react";
import { VariantProps } from "class-variance-authority";

import { fieldVariants } from "./variants";

declare global {
    namespace UI.Field {
        type Props<
            TData,
            TName extends DeepKeysOfType<TData, string>,
            TOnMount extends undefined | FormValidateOrFn<TData>,
            TOnChange extends undefined | FormValidateOrFn<TData>,
            TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TData>,
            TOnBlur extends undefined | FormValidateOrFn<TData>,
            TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TData>,
            TOnSubmit extends undefined | FormValidateOrFn<TData>,
            TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TData>,
            TOnDynamic extends undefined | FormValidateOrFn<TData>,
            TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TData>,
            TOnServer extends undefined | FormAsyncValidateOrFn<TData>,
            TSubmitMeta,
        > = Omit<
            TextInput.Props,
            "form" | "name" | "value" | "defaultValue" | "onChange" | "onBlur" | "children" | "type" | "aria-invalid"
        > &
            VariantProps<typeof fieldVariants> & {
                form: Pick<
                    ReactFormApi<
                        TData,
                        TOnMount,
                        TOnChange,
                        TOnChangeAsync,
                        TOnBlur,
                        TOnBlurAsync,
                        TOnSubmit,
                        TOnSubmitAsync,
                        TOnDynamic,
                        TOnDynamicAsync,
                        TOnServer,
                        TSubmitMeta
                    >,
                    "Field"
                >;
                name: TName;
                label: ReactNode;
                type?: "text" | "password" | "email" | "url" | "tel" | "search";
                validators?: FieldValidators<
                    TData,
                    TName,
                    DeepValue<TData, TName>,
                    FieldValidateOrFn<TData, TName, DeepValue<TData, TName>>,
                    FieldValidateOrFn<TData, TName, DeepValue<TData, TName>>,
                    FieldAsyncValidateOrFn<TData, TName, DeepValue<TData, TName>>,
                    FieldValidateOrFn<TData, TName, DeepValue<TData, TName>>,
                    FieldAsyncValidateOrFn<TData, TName, DeepValue<TData, TName>>,
                    FieldValidateOrFn<TData, TName, DeepValue<TData, TName>>,
                    FieldAsyncValidateOrFn<TData, TName, DeepValue<TData, TName>>,
                    FieldValidateOrFn<TData, TName, DeepValue<TData, TName>>,
                    FieldAsyncValidateOrFn<TData, TName, DeepValue<TData, TName>>
                >;
            };

        type Signature = <
            TData,
            TName extends DeepKeysOfType<TData, string>,
            TOnMount extends undefined | FormValidateOrFn<TData>,
            TOnChange extends undefined | FormValidateOrFn<TData>,
            TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TData>,
            TOnBlur extends undefined | FormValidateOrFn<TData>,
            TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TData>,
            TOnSubmit extends undefined | FormValidateOrFn<TData>,
            TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TData>,
            TOnDynamic extends undefined | FormValidateOrFn<TData>,
            TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TData>,
            TOnServer extends undefined | FormAsyncValidateOrFn<TData>,
            TSubmitMeta,
        >(
            props: Props<
                TData,
                TName,
                TOnMount,
                TOnChange,
                TOnChangeAsync,
                TOnBlur,
                TOnBlurAsync,
                TOnSubmit,
                TOnSubmitAsync,
                TOnDynamic,
                TOnDynamicAsync,
                TOnServer,
                TSubmitMeta
            >,
        ) => JSX.Element;

        namespace Root {
            type Props = ComponentProps<"div"> & VariantProps<typeof fieldVariants>;
        }

        namespace Label {
            type Props = ComponentProps<"label">;
        }

        namespace Error {
            type Props = ComponentProps<"div">;
        }

        namespace TextInput {
            type Props = ComponentProps<"input">;
        }
    }
}
