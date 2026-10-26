import { FormActions } from "./components/actions";
import { FormFields } from "./components/fields";
import { FormLinks } from "./components/links";
import { FormRoot } from "./form";

export const Form = Object.assign(FormRoot, { Fields: FormFields, Actions: FormActions, Links: FormLinks });

export { useForm, useField, useSelector } from "@tanstack/react-form";
