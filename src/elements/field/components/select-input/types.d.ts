import type { JSX } from "react";

declare global {
    namespace UI.Field.SelectInput {
        type Option = {
            value: string;
            label: string;
            description?: string;
        };

        type BaseOptions = {
            options: Option[];
            label: string;
            disabled?: boolean;
        };

        type BaseProps = BaseOptions &
            UI.Field.Input.Contract & {
                name?: string;
            };

        type StaticOptions = {
            searchable?: false;
        };

        type SearchableOptions = {
            searchable: true;
            searchLabel: string;
            emptyLabel: string;
        };

        type SearchOptions = StaticOptions | SearchableOptions;

        type Options = BaseOptions & SearchOptions;

        type Props = BaseProps & SearchOptions;

        type Result = JSX.Element;

        type Signature = (props: Props) => Result;

        namespace Search {
            type Props = BaseProps & SearchableOptions;

            type Result = JSX.Element;

            type Signature = (props: Props) => Result;
        }
    }
}
