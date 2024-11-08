export interface SelectionAction {
  action: {
    class: string
    icon: String
    id: number
    name: string
    view: boolean
  }
  element: {
    ciudad: string
    cliente_area: string
    cordinador: string
    director: string
    documento: string
    gerente: string
    id_ceco: string
    nombre_ceco: string
    nombre_completo: string
  }
  index: number
}
