import type { ClassNames } from "react-day-picker";

const navigation =
    "pointer-events-auto inline-flex size-8 items-center justify-center rounded-md hover:bg-accent disabled:opacity-50 aria-disabled:opacity-40 focus-visible:ring-2 focus-visible:ring-ring";

export const calendarStyles: Partial<ClassNames> = {
    months: "relative flex flex-col gap-4 sm:flex-row",
    month: "flex w-full flex-col gap-3",
    nav: "pointer-events-none absolute inset-x-0 top-0 flex justify-between",
    button_previous: navigation,
    button_next: navigation,
    chevron: "size-4 fill-current",
    month_caption: "flex h-8 min-w-0 items-center px-8",
    dropdowns: "grid w-full min-w-0 grid-cols-[minmax(0,1fr)_4.5rem] gap-1",
    month_grid: "w-full border-collapse",
    weekdays: "grid grid-cols-7",
    weekday: "min-w-0 text-xs font-normal text-muted-foreground",
    week: "mt-1 grid grid-cols-7",
    day: "relative aspect-square min-w-0 p-0 text-center text-sm [&:has(button:focus-visible)]:z-10",
    day_button:
        "aspect-square w-full rounded-md font-normal hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    selected: "[&>button]:bg-primary [&>button]:text-primary-foreground",
    today: "[&>button]:ring-1 [&>button]:ring-inset [&>button]:ring-primary",
    outside: "text-muted-foreground opacity-50",
    disabled: "pointer-events-none opacity-30",
    hidden: "invisible",
};

export const dateInputStyles = {
    trigger:
        "flex h-10 w-full min-w-0 items-center gap-2 rounded-md border border-input bg-card px-3 text-left text-sm outline-none hover:bg-accent focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:border-destructive data-[empty=true]:text-muted-foreground",
    caption: "min-w-0 flex-1 truncate",
    icon: "size-4 shrink-0 text-muted-foreground",
    positioner: "z-[80] outline-none",
    popup: "w-[var(--anchor-width)] max-h-[var(--available-height)] max-w-[calc(100vw-1.5rem)] overflow-auto rounded-lg border border-border bg-card text-card-foreground shadow-xl outline-none",
    calendar: "w-full p-2",
    footer: "flex justify-end border-t border-border p-2",
    clear: "rounded-md px-3 py-1.5 text-sm outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring",
};

export const calendarDropdownStyles = {
    trigger:
        "flex h-8 w-full min-w-0 items-center justify-between gap-1 rounded-md border border-input bg-card px-2 text-sm outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring/20 disabled:opacity-50",
    icon: "size-3.5 shrink-0",
    positioner: "z-[90] outline-none",
    popup: "flex max-h-[min(var(--available-height),16rem)] min-w-[var(--anchor-width)] flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-xl outline-none",
    item: "flex cursor-pointer items-center justify-between gap-3 rounded-md px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
};
