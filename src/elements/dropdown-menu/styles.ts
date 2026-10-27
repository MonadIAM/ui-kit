export const menuStyles = {
    positioner: "z-50 outline-none",
    popup: "max-h-[var(--available-height)] w-66 max-w-[calc(100vw-1.5rem)] overflow-y-auto rounded-lg border border-border bg-card p-2 text-card-foreground shadow-xl outline-none",
    item: "flex min-h-7 w-full cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-sm leading-5 outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
    itemDefault: "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
    itemDestructive: "data-[highlighted]:bg-destructive/10 data-[highlighted]:text-destructive",
    separator: "my-1.5 h-px bg-border",
};
