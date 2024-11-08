import { Response } from "../../models/Response";
import { SelectType } from "../dashboard/powerbi";


export interface AllPositions {
    id_function: number;
    id: string;
    cargo: string;
    funcion: string;
}

export interface GetAllPositions extends Response {
    result: Array<AllPositions>;
}

export interface GetEncryptedData extends Response {
    result: string;
}

export interface AllPositionsFormatted {
    id: string;
    cargo: string;
    funcion: string;
    idFunction: number;
    permisos: string;
}


export interface StructureWithModule {
    idModulo: string;
    nombre_modulo: string;
    cantidad_acciones_modulo: string;
    total_asignadas_modulo: string;
    submodulos: Submodulo[];
}

export interface Submodulo {
    idSubModulo: string;
    nombre_sub_modulo: string;
    cantidad_acciones: string;
    total_asignadas: string;
    acciones: Accione[];
}

export interface Accione {
    idAccion: string;
    nombre_accion: string;
    descripcion: string;
    asignada: string;
    editable:number;
}

export interface StructurePermissionsRole {
    modulos: StructureWithModule[];
}

export interface GetStructurePermissionsRole {
    result: StructurePermissionsRole;
}

export interface StructureFormatted {
    id: string;
    name: string;
    cantidad: number;
    total: number;
    submodulos?: StructureFormatted[];
    acciones?: AccioneFormatted[];
}

export interface AccioneFormatted {
    id: string;
    name: string;
    assigned: boolean | string;
    editable: boolean | number;
    description: string;
}

export interface FormattedActions {
    module_id: number;
    module: string;
    submodule_id: number;
    submodule: string;
    action_id: number;
    action: string;
    assigned: boolean | number;
    assignedString?: string;
    editable: boolean | string;
    selectElements?: boolean;
    statusElementCheck?: boolean;
    disabled: boolean;
}

export interface PermissionToSave {
    action_id: number;
    assigned: boolean | number;
}

export interface FormattedPermissionToSave {
    selectedApplication:number;
    permissions: Array<PermissionToSave>;
    temporaryPermissions: Array<number>;
    startDate: string;
    endDate: string;
    ticketNumber:number;
    infoData:InfoData;
}
export interface InfoData {
    id:string;
    type:number;
    name:string;
}

export interface SuccessResponse extends Response {
    result: boolean;
}

export interface AllUsers {
    identificacion: string;
    nombre: string;
    rol: string;
    func: string;
    id_rol: string;
    id_func: string;
    cargo_encargo: string;
}

export interface GetAllUsers extends Response {
    result: Array<AllUsers>;
}

export interface AllUsersFormatted {
    identificacion: string;
    cargo: string;
    encargo: string;
    nombre: string;
    permisos: number;
    clientes: number;
    cecos: number;
    pcrc: number;
    'cecos admin': number;
}

export interface ClientCecoPcrc{
    id: number;
    elemento: string;
    estado?: string;
    hasPermission: 1 | 0;
}

export interface GetClientCecoPcrc extends Response {
    result: Array<ClientCecoPcrc>;
}

export interface ClientCecoPcrcFormatted {
    id: number;
    elemento: string;
    estado?: string;
    hasPermission: Boolean | number;
    isSelected: Boolean;
}

export interface ClientCecoPcrcDataModal {
    infoData: { 
        typeId: number;
        id: number;
        typeName: string;
        title: string;
        elements: Array<ClientCecoPcrcFormatted>
     }
}



export interface GetApplications extends Response { 
    result: Array<SelectType>;
}


export interface PersonsPCRC {
    selectElements?: string;
    documento: string;
    nombre: string;
    posicion: string;
}

export interface UserData  {
    id: string;
    name: string;
    type: number;
}

export interface GetPersonsPCRC extends Response{
    result: Array<PersonsPCRC>
}

export interface PCRCPositions {
    id: string;
    elemento: string;
    cliente: string;
    id_dp_clientes: string;
    id_dp_centros_costos: string;
    hasPermission: string;
    estado: string;
    disabled?: string;
}

export interface GetPCRCPositions extends Response{
    result: Array<PCRCPositions>
}

export interface PCRCPositionsFormatted {
    selectElements: string;
    statusElementCheck: string;
    cod_pcrc: string;
    pcrc: string;
    cliente: string;
    id_dp_clientes?: string;
    estado?: string;
    id_dp_centros_costos?: string;
    disabled?: boolean;
}

export interface SavePcrcForPositions extends Response {
    result: boolean;
}


export interface AllClients {
    id: number;
    cliente: string;
    estado: number;
}

export interface GetAllClients extends Response {
    result: Array<AllClients>;
}

export interface AllClientsFormated {
    id: number;
    cliente: string;
    permisos: number;
}

export interface AllPcrc {
    id_dp_clientes: number;
    cliente: string;
    cod_pcrc: string;
    pcrc: string;
    estado: number;
}

export interface GetAllPcrc extends Response {
    result: Array<AllPcrc>;
}

export interface AllPcrcFormated {
    id: string;
    pcrc: string;
    permisos: number;
}


export interface TemporaryPermissionResponse extends Response {
    result: Array<TemporaryPermission>;
}

export interface TemporaryPermission {
    module_id:number
    module:string;
    submodule_id:number;
    submodule:string;
    action_id:number;
    action:string;
    description:string;
    start_date:string;
    end_date:string;
    nombre_modificador:string;
    fecha_modificacion:string;
    state:number|string;
    edit?:string;
}


