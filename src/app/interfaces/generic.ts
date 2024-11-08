export interface GenericJson{
    [key:  string ] : string | number | boolean | object;
}

export interface SelectValues {
    id: string
    name: string
}
export interface DropdownSelector {
	id: number;
	name: string;
}

export interface DinamicInterface {
	[key: string]: string | boolean
}

export interface TokenInterceptor extends Response{
    result: Array<{expiracion:string}>
}
