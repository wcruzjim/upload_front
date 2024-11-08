
export interface UserInformationResponse extends Response {
    result:UserInformation;
}

export interface UserInformation {
    personal_information:PersonalInformation;
    contact_information:ContactInformation;
    location_information:LocationInformation;
    complementary_information:ComplementaryInformation
}

export interface PersonalInformation {
    documento:string;
    nombre_completo:string;
    cargo:string;
    sexo:string;
    genero:string;
    nombre_completo_jefe:string;
    titulo:string;
    discapacidad:string;
    grupo_etnico:string;
    sede_trabajo:string;
}

export interface ContactInformation {
    email_personal:string;
    email_corporativo:string;
    telefono1:number;
    celular1:number;
    celular2:number;
    contacto_emergencia:string;
    celular_emergencia:string;
}

export interface LocationInformation {
    departamento:string;
    municipio:string;
    zona:string;
    barrio:string;
    estrato:string;
    direccion:string;
}

export interface ComplementaryInformation {
    hijos:number
    estado_ruta:number
    vehiculo:number
    opcion_demografico:string
    hobbies:string
}

export interface TableData {
    property:string;
    value:string|number;
}

export interface FormattedUserInformation {
    personal_information:Array<TableData>;
    contact_information:Array<TableData>;
    location_information:Array<TableData>;
    complementary_information:Array<TableData>
}


