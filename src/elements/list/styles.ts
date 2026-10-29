export const listStyles = {
    root: "text-sm",
    row: "grid gap-2 py-3 group-first/list-row:pt-0 group-last/list-row:pb-0 sm:items-center sm:gap-6 sm:data-[label-visible=true]:grid-cols-[minmax(8rem,1fr)_3fr]",
    labelHidden: "sr-only",
    body: "min-w-0",
    content: "min-w-0 break-words [overflow-wrap:anywhere]",
};

export const listContentStyles = {
    root: "min-w-0",
    row: "group/list-row border-b border-border last:border-b-0",
    viewport: "min-h-0 overflow-y-auto overscroll-contain [overflow-anchor:none]",
    canvas: "relative w-full",
    virtualRow: "absolute left-0 top-0 w-full border-b border-border data-[last=true]:border-b-0",
};
