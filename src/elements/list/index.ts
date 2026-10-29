import { ColumnList } from "./columns/column-list";
import { ListContent } from "./content";
import { BaseList } from "./list";

export const List = Object.assign(BaseList, { Columns: ColumnList, Custom: ListContent });
