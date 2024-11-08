import { SelectType } from "../dashboard/powerbi";
import { DinamicInterfaceTable } from "./tables";

export interface DataActionTable {
    id: number;
    style?: Function;
    name: string;
    class: string;
    icon: string;
    view: boolean;
  }

export interface ColumnActions {
  action: string;
  column: string;
  color?: string;
  w100?: boolean;
  icon?: string | Function;
  style?: Function;
  name?: Function;
  styleText?: Function;
  iconStyle?:Function;
}

export interface RowActions {
  action: string;
  keyRow: string;
  row: string;
  color: string;
	colorText: string;
  w100?: boolean;
  icon?: string;
  style?: Function;
  name?: Function;
  styleText?: Function;
}

export interface ColumnStyle {
  column: string;
  getColor: Function;
	row?: string;
	claveRow?: string;
}

export interface GlobalColumnStyle {
  column: string;
  style: Object;
}

export interface SelectedColumns{
  columns: Array<string>;
  valuesSelect: Array<Array<SelectType>>;
}

export interface OuputActionTable{
  action: DataActionTable,
  element: Object;
  index: number;
}

export interface FilteredByColumn{
  column: string;
  values: Array<string>;
}

export interface SpecificBackgroundByColumn{
  column: string;
  getBackColor: Function;
  changeColorText?: Boolean;
  icon?: Function;
  tooltip?: Function;
  iconStyle?: Function;
}

export interface InputColumns {
  columns: Array<string>;
}

export interface ColumnsGroup {
  name: string;
  columns: string[]
}


export interface EmitDataTable {
  original:Object[];
  changed: Object[]
}

export interface HeaderStyle {
  column: string;
  style: Object;
}

export interface ReturnStyleRowBtn {
	'background-color'?: string;
	'color'?: string;
}
export interface ActionEmitBtnRow {
	columna: string;
	fila: DinamicInterfaceTable;
}
export interface ListInputs {
	columna: string;
	row: string;
}
export interface ArrayStyles {
	'background-color'?: string;
	color?: string;
}





export interface ShowMoreOptions{
  tooltipMore?: string;
  tooltipLess?: string;
  iconMore?: string;
  iconLess?: string;
  currentStatus?: string;
}

