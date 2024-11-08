import { Response } from '../../models/Response';
export interface DataSalaryStructure {
    id: string
    cod_pcrc: string
    pcrc: string
    nombre_cargo: string
    nivel_salarial: string
    fecha_inicio: string
    fecha_fin: string
    idioma: string
    salario_fijo: string
    salario_variable: string
    medios_de_movilizacion: string
    valor_dia_convenio: string
    tipo_salario: string
    tipo_solicitud: string
    descripcion_estructura_salarial_tipo_servicio: string
    ciudad: string
    estado: string
}

export interface ResponseDataSalaryStructure extends Response {
    result: DataSalaryStructure[]
}

export interface DatesExport {
    startDate: string
    endDate: string
}

export interface DataSalaryStructureHistory {
    id: string
    id_gh_estructura_salarial: string
    campo_modificado: string
    valor_anterior: string
    valor_nuevo: string
    fecha_creacion: string
    documento_modificador: string
}

export interface ResponseDataSalaryStructureHistory extends Response {
    result: DataSalaryStructureHistory[]
}

export interface DataPositions {
    id_cargo: string
    nombre_cargo: string
}

export interface ResponseDataPositions extends Response {
    result: DataPositions[]
}


export interface DataCecos {
    id_pcrc: string
    pcrc: string
}

export interface ResponseDataCecos extends Response {
    result: DataCecos[]
}

export interface FormatDataSalaryStructure {
    'id': string
    'cod pcrc': string
    'pcrc': string
    'cargo': string
    'nivel salarial': string
    'idioma': string
    'salario fijo': string
    'salario variable': string
    'medios de movilización': string
    'valor dia convenio': string
    'tipo salario': string
    'tipo solicitud': string
    'tipo servicio': string
    'estado': string
}


