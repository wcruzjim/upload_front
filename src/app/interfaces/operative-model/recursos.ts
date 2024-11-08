export interface responseRecursos extends Response{
    result: recursosResult[];
}

export interface recursosResult{
    documento:string,
    nombre_completo: string;
    pcrc: string;
    estado: string;
    fecha_alta: string;
    recursos: string;
    usuarios?:string;
    password?:number;
    rojo?:number;
    jefe:number;
    user_logged_in:number;
}

export interface responseRecursosByDocument extends Response{
    result: recursosByDocumentResult[];
}

export interface recursosByDocumentResult{
    documento:string,
    usuario_red: string;
    placa_etiqueta: string;
    descripcion: string;
    marca: string;
}
export interface responseUsuariosByDocument extends Response{
    result: recursosByDocumentResult[];
}

export interface usuariosByDocumentResult{
    documento:string,
    usuario_red: string;
    dominio: string;
    estado: string;
    fecha_actualizacion_contrasena: string;
}

export interface responseRecursosExport extends Response{
    result: recursosExportResult[];
}

export interface recursosExportResult{
    documento:string;
    "nombre completo" :string;
    pcrc:string;
    "id recurso":string;
    "numero placa":string;
    origen:string;
    descripcion:string;
    marca:string;
    estado:string;
    "fecha creación":string;
    "fecha modificación":string;
}
export interface responseUsuariosRedExport extends Response{
    result: usuariosRedExportResult[];
}

export interface usuariosRedExportResult{
    documento:string;
    "nombre completo" :string;
    pcrc:string;
    usuario_red:string;
    dominio:string;
}