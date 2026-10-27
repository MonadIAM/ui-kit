import { ColumnList } from "./columns/column-list";
import { BaseList } from "./list";

export const List = Object.assign(BaseList, { Columns: ColumnList });
