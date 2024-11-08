export interface Survey {
    id_encuesta_maestro: string;
    nombre: string;
    nombre_id: string;
    encuesta: string;
    descripcion: string;
    cargos: null;
    habilitado: string;
    publico: null | string;
    idTipo: string;
}

export interface SurveySave {
    idSurvey: string;
    idPreference: string;
    answer: string;
}
