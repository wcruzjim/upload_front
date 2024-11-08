
export interface MatrixI{
    idmatrix?:string;
    name:string;
    elements:ElementsMatrix[];
}

export interface ElementsMatrix{
    idmatrizelemento:string
    limite_inferior:string
    limite_superior:string
    resultado:string
    result:string
}

export interface ResultMatrixintoMAtrix {
    id: string | number; 
    type: string | number;
    nombre: string;
}