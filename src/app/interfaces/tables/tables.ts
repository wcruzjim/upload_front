export interface TableDataAlert {
  title: string
  message: string;
  icon: string;
  name: string;
}

export interface SelectedElement {
  name: string;
  selected: boolean;
}

export interface SelectMultipleCheckElemnt{
  documento: number;
  selectElements: boolean;
}

export interface DinamicInterfaceTable {
	[key: string]: string
}

export interface ConfigActionButton {
	id: string | number
	show: boolean
}

export interface ConfigAction {
	style?: DinamicInterfaceTable
	hidden?: Array<ConfigActionButton>
}

export interface cambioValorBtnRow {
	column: string
	row: Object
}



