import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormaddforecastService {

constructor() { 
  // This is intentional
}

getconfAddFilter() {
  return {
    rows: [
      {
        fields: [
          { name: "name", label: 'nombre', size: "col-lg-12", type: "text",data:null  }
        ]
      },
      {
        fields: [
          { name: "description", label: 'descripcion', size: "col-lg-12", type: "textarea",data:null  }
        ]
      }
    ],
    title: "crear_pronostico",
    buttons: [
      { title: 'Aceptar', class: 'btn btn-success', size: 'col-lg-12' }
    ]
  }
}

}
