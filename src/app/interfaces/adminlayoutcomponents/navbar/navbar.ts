export interface ListTitles {
    path: string;
	title: string;
	icon: string;
	typeIcon: string;
	class: string;
	subroutes: Subroute[];
	viewsubroutes: boolean;
	permision: string | string[];
	external_url?: string;
	letra?: string;
}

export interface Subroute {
    class:     string;
    icon:      string;
    letra:     string;
    path:      string;
    permision: string[] | string;
    title:     string;
    typeIcon:  string;
    external_url?: string;
}

export interface User {
    actions:   string[];
    cod_ceco:  string;
    desc_ceco: string;
    id:        string;
    lastName:  string;
    name:      string;
    place:     number;
    plaza:     number;
    user:      string;
}

export interface DataSImulation {
    rows:  Row[];
    title: string;
}

export interface Row {
    fields: Field[];
}

export interface Field {
    name?:        string;
    label:        string;
    size:         string;
    type:         string;
    data?:        DataField[] | null;
    idvalue?:     string;
    name_select?: string;
    class?:       string;
}

export interface DataField {
    tipo: number;
    name: string;
}

