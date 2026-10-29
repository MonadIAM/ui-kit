import { useVirtualizer } from "@tanstack/react-virtual";
import { useEffect, useState } from "react";
import { cn } from "cn";

import { listContentStyles } from "./styles";

export function ListContent<Item extends UI.List.KeyedItem>({
    items,
    renderItem,
    height,
    estimateSize = 64,
    hasMore = false,
    loading = false,
    onEndReached,
    className,
    ...props
}: UI.List.Custom.Props<Item>) {
    "use no memo";

    const [scrollElement, setScrollElement] = useState<HTMLDivElement | null>(null);
    const virtualizer = useVirtualizer({
        count: items.length,
        getScrollElement: () => scrollElement,
        getItemKey: (index) => items[index].id,
        estimateSize: () => estimateSize,
        overscan: 3,
        enabled: height !== undefined,
    });
    const virtualItems = virtualizer.getVirtualItems();
    const lastIndex = virtualItems.at(-1)?.index;

    useEffect(() => {
        if (lastIndex !== undefined && lastIndex >= items.length - 3 && hasMore && !loading) {
            onEndReached?.();
        }
    }, [lastIndex, items.length, hasMore, loading, onEndReached]);

    if (!height) {
        return (
            <ul {...props} className={cn(listContentStyles.root, className)} aria-busy={loading}>
                {items.map((item) => (
                    <li key={item.id} className={listContentStyles.row}>
                        {renderItem(item)}
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div ref={setScrollElement} className={listContentStyles.viewport} style={{ height }}>
            <ul
                {...props}
                className={cn(listContentStyles.root, listContentStyles.canvas, className)}
                aria-busy={loading}
                style={{ ...props.style, height: virtualizer.getTotalSize() }}>
                {virtualItems.map((row) => (
                    <li
                        key={row.key}
                        ref={virtualizer.measureElement}
                        data-index={row.index}
                        data-last={row.index === items.length - 1}
                        aria-posinset={row.index + 1}
                        aria-setsize={hasMore ? -1 : items.length}
                        className={listContentStyles.virtualRow}
                        style={{ transform: `translateY(${row.start}px)` }}>
                        {renderItem(items[row.index])}
                    </li>
                ))}
            </ul>
        </div>
    );
}
