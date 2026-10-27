export const selectInputStyles = {
    trigger:
        "flex h-9 w-full min-w-0 items-center justify-between gap-2 rounded-md border border-input bg-card px-3 py-1 text-left text-sm outline-none hover:bg-accent focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:border-destructive",
    value: "min-w-0 truncate",
    icon: "size-4 shrink-0",
    positioner: "z-[80] outline-none",
    popup: "flex max-h-[min(var(--available-height),26rem)] w-[var(--anchor-width)] max-w-[calc(100vw-1.5rem)] flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-xl outline-none",
    search: "shrink-0 border-b border-border p-2",
    input: "h-9 w-full rounded-md border border-input bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring/20",
    list: "min-h-0 overflow-y-auto overscroll-contain p-1 empty:p-0",
    empty: "p-4 text-center text-sm text-muted-foreground empty:hidden",
    item: "flex cursor-pointer items-center justify-between gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
    content: "min-w-0",
    description: "text-xs text-muted-foreground [overflow-wrap:anywhere]",
    indicator: "flex shrink-0 items-center text-primary",
};
