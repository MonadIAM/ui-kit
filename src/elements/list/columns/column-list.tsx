import { cn } from "cn";

import { Text } from "~ui/elements/text";

import { ListContent } from "../content";
import { columnListStyles } from "./styles";

export function ColumnList({
    onEndReached,
    estimateSize,
    maxHeight,
    className,
    columns,
    hasMore,
    loading,
    height,
    label,
    items,
    empty,
    ...props
}: UI.List.Columns.Props) {
    const gridTemplateColumns = columns.map((column) => column.width ?? "minmax(0, 1fr)").join(" ");

    return (
        <div {...props} className={cn(columnListStyles.root, className)}>
            <div aria-hidden="true" className={columnListStyles.header} style={{ gridTemplateColumns }}>
                {columns.map((column) => (
                    <Text.Span key={column.id} className={cn(columnListStyles.heading, column.className)}>
                        {column.label}
                    </Text.Span>
                ))}
            </div>
            <ListContent
                aria-label={label}
                items={items}
                height={height}
                maxHeight={maxHeight}
                estimateSize={estimateSize}
                hasMore={hasMore}
                loading={loading}
                onEndReached={onEndReached}
                renderItem={({ cells }) => (
                    <div className={columnListStyles.row} style={{ gridTemplateColumns }}>
                        {columns.map((column) => (
                            <div key={column.id} className={cn(columnListStyles.cell, column.className)}>
                                <Text.Span className={columnListStyles.hidden}>{column.label}: </Text.Span>
                                {cells[column.id]}
                            </div>
                        ))}
                    </div>
                )}
            />
            {items.length === 0 && <Text.P className={columnListStyles.empty}>{empty}</Text.P>}
        </div>
    );
}
