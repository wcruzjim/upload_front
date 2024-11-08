export enum FilterOptions {
	FILTER,
	COST_CENTER,
	AVAILABLE,
}

export interface MoveResource {
	cellToMove: string;
	city: string;
	building: string;
	floor: string;
	spot: string;
}

export interface ResourceValidation {
	id: string;
	extension: string;
	alternativeExtension: string;
	machine: string;
}
