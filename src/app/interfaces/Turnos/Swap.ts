export interface Swap {
    name: string;
    amount: number;
    class: string;
    valueProgress: number;
    idQuery: string;
    icon: string;
  }

  export interface SwapDetail {
    id_tur_turnos_intercambios:      string;
    identificacion_emisor:           string;
    identificacion_receptor:         string;
    id_tur_turnos_usuarios_emisor:   string;
    id_tur_turnos_usuarios_receptor: string;
    estado:                          string;
    fecha_creacion:                  Date;
    turno:                           Date;
    solicitante:                     string;
    solicitado:                      string;
  }


export interface EventClick {
  id: number,
  extendedProps: { id_event_mapper: number },
  title: string,
  startStr: string
}

export interface EventHandleClick {
  event: EventClick;
}