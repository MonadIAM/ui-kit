import { cva } from "class-variance-authority";

import { FieldOrientation } from "~ui/enums";

export const fieldVariants = cva(
    "group/field flex min-w-0 w-full gap-1.5 data-[invalid]:text-destructive data-[readonly=true]:pb-5",
    {
        variants: {
            orientation: {
                [FieldOrientation.VERTICAL]: "flex-col",
                [FieldOrientation.HORIZONTAL]:
                    "flex-row flex-wrap items-center gap-x-4 [&>[data-slot=field-heading]]:min-w-28 [&>[data-slot=field-control]]:min-w-0 [&>[data-slot=field-control]]:flex-1 [&>[data-slot=field-error]]:w-full",
                [FieldOrientation.RESPONSIVE]:
                    "flex-col @md/field-group:flex-row @md/field-group:flex-wrap @md/field-group:items-center @md/field-group:gap-x-4 @md/field-group:[&>[data-slot=field-heading]]:min-w-28 @md/field-group:[&>[data-slot=field-control]]:flex-1 @md/field-group:[&>[data-slot=field-error]]:w-full",
            },
        },
        defaultVariants: { orientation: FieldOrientation.VERTICAL },
    },
);

export const fieldLabelStyles =
    "flex min-h-5 items-center text-xs font-medium leading-5 text-foreground group-data-[invalid]/field:text-destructive group-data-[disabled]/field:opacity-50";
export const fieldHeadingStyles = "min-h-5";
export const fieldActionStyles =
    "ml-auto shrink-0 text-xs leading-5 [&_a]:rounded-sm [&_a]:text-primary [&_a]:outline-none [&_a]:underline-offset-4 [&_a:hover]:underline [&_a:focus-visible]:ring-2 [&_a:focus-visible]:ring-ring";
export const fieldMessageStyles = "min-h-5 w-full";

export const fieldErrorStyles = "text-xs leading-4 text-destructive";
