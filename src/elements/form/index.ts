import { FormRoot } from "./form";
import { FormActions } from "./components/actions";
import { FormLinks } from "./components/links";

export const Form = Object.assign(FormRoot, { Actions: FormActions, Links: FormLinks });
