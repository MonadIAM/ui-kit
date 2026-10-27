import { cn } from "cn";

import { Text } from "~ui/elements/text";

import { columnListStyles } from "./styles";

export function ColumnList({ label, columns, items, empty, className, ...props }: UI.List.Columns.Props) {
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
            <ul aria-label={label} className={columnListStyles.list}>
                {items.map(({ id, cells }) => (
                    <li key={id} className={columnListStyles.row} style={{ gridTemplateColumns }}>
                        {columns.map((column) => (
                            <div key={column.id} className={cn(columnListStyles.cell, column.className)}>
                                <Text.Span className={columnListStyles.hidden}>{column.label}: </Text.Span>
                                {cells[column.id]}
                            </div>
                        ))}
                    </li>
                ))}
            </ul>
            {items.length === 0 && <Text.P className={columnListStyles.empty}>{empty}</Text.P>}
        </div>
    );
}
