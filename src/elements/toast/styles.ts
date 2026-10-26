export const toastViewportStyles =
    "pointer-events-none fixed right-4 bottom-4 z-50 max-h-[calc(100dvh-2rem)] w-[min(26.25rem,calc(100vw-2rem))] outline-none";

export const toastRootStyles =
    "group/toast pointer-events-auto relative shrink-0 rounded-lg border border-border bg-popover p-4 text-popover-foreground shadow-xl transition-[opacity,transform] duration-200 outline-none data-[ending-style]:translate-x-4 data-[ending-style]:opacity-0 data-[starting-style]:translate-y-2 data-[starting-style]:opacity-0 data-[type=error]:border-destructive/50 data-[type=success]:border-primary/20 data-[type=warning]:border-amber-600/30 motion-reduce:transition-none";

export const toastIconStyles =
    "mt-0.5 size-5 shrink-0 text-primary group-data-[type=error]/toast:text-destructive group-data-[type=warning]/toast:text-amber-600 dark:group-data-[type=warning]/toast:text-amber-400 [&>svg]:size-5";

export const toastBodyStyles = "min-w-0 flex-1";

export const toastTitleStyles = "text-sm font-semibold leading-5 wrap-anywhere";

export const toastDescriptionStyles =
    "mt-1 max-h-40 overflow-auto text-sm leading-6 wrap-anywhere text-muted-foreground empty:hidden";

export const toastActionStyles =
    "mt-3 rounded px-1 text-sm font-medium text-primary underline-offset-4 hover:underline outline-none focus-visible:ring-2 focus-visible:ring-ring";

export const toastCloseStyles =
    "flex size-7 shrink-0 items-center justify-center rounded text-muted-foreground hover:bg-muted hover:text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring";

export const toastCloseIconStyles = "size-4";
