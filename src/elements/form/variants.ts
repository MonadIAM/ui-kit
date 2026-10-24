import { cva } from "class-variance-authority";

export const formSetVariants = cva(
    "flex flex-col gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
);

export const formLegendVariants = cva("mb-1.5 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base");

export const formGroupVariants = cva(
    "group/field-group @container/field-group flex w-full flex-col gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4",
);
