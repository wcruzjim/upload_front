export interface EventTemplate {
    nombre: string;
    inicio: string;
    fin: string;
    icono: string;
    descripcion: string;
    color: string;
    class: string;
    id_tur_turnos_usuarios: string;
    descanso: number;
    id_tur_eventos_turnos: number;
    eventDescription?: EventDescription;
  }

  export interface EventDescription{
    amount: number;
    color: string;
    id: number;
    type: number;
    name: string;
  }