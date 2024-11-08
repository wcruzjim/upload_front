export interface SelectionActionInterview {
  action: {
    class: string
    icon: String
    id: number
    name: string
    view: boolean
  }
  element: {
    aspecto_medida: string
    cliente_area: string
    cordinador: string
    director: string
    documento: string
    estado: string
    fecha_baja: string
    fecha_solicitud: string
    gerente: string
    id_ceco: string
    id_gh_retiros: string
    motivo_medida: string
    municipio: string
    nombre_ceco: string
    nombre_completo: string
    tipo_documento: string
    tipo_medida: string
  }
  index: number
}
