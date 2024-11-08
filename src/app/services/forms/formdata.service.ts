import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormdataService {

  constructor() {
    // This is intentional
   }

  getconfAddFilter() {
    return {
      rows: [
        {
          fields: [
            { name: "name", label: 'nombre', size: "col-lg-12", type: "text", data:null }
          ]
        },
        {
          fields: [
            { name: "type_filter", label: 'tipo_filtro', size: "col-lg-12", type: "select", data: null, idvalue:'idtypefilter', name_select:'name' }
          ]
        }
      ],
      title: "crear_filtro",
      buttons: [
        { title: 'Aceptar', class: 'btn btn-success', size: 'col-lg-12' }
      ]
    }
  }

  
  getFilterDatatable() {
    return {
      rows: [
        {
          fields: [
            { name: "", label: '', size: "col-lg-12", type: "select", data: null, idvalue:'idtypefilter', name_select:'name' }
          ]
        }
      ],
      title: "crear_filtro",
      buttons: [
        { title: 'Aceptar', class: 'btn btn-success', size: 'col-lg-12' }
      ]
    }
  }

  getconfAddFilterBi() {
    return {
      rows: [
        {
          fields: [
            { name: "tabla", label: 'tabla', size: "col-lg-12", type: "text",data:null  }
          ]
        },
        {
          fields: [
            { name: "columna", label: 'columna', size: "col-lg-12", type: "text",data:null  }
          ]
        },
        {
          fields: [
            { name: "type_filter", label: 'tipo_filtro', size: "col-lg-12", type: "select", data: null, idvalue:'idtypefilter', name_select:'name' }
          ]
        }
      ],
      title: "crear_filtro",
      buttons: [
        { title: 'Aceptar', class: 'btn btn-success', size: 'col-lg-12' }
      ]
    }
  }

  getformSimulation() {
    return {
      rows: [
        {
          fields: [
            { name: "tipo", label: 'tipo_usuario', size: "col-lg-4", type: "select", data: [
              {tipo:1, name:"Usuario Red"},
              {tipo:2, name:"Cédula"}
            ] , idvalue:'tipo', name_select:'name' },
            { name: "contenido", label: '', size: "col-lg-5", type: "text",data:null },
            {  class: 'btn btn-success', type: "button",size: 'col-lg-3', label:'buscar' }

          ]
        }
        
      ],
      title: "simular_usuario"
    }
  }

  getformCodes() {
    return {
      rows: [
        {
          fields: [
            { name: "codigo_gestion", label: 'Codigo de la Gestión', size: "col-lg-4", type: "text" },
            { name: "codename", label: 'Nombre del Código', size: "col-lg-4", type: "text" },
            { name: "category", label: 'Categoria', size: "col-lg-4", type: "text" }
          ]
        },{
          fields:[
            { name: "conexion", label: 'Conexion', size: "col-lg-4", type: "slide" },
            { name: "rpc", label: 'Rpc', size: "col-lg-4", type: "slide" },
            { name: "productivo", label: 'Productivo', size: "col-lg-4", type: "slide" }
           
          ]
        },{
          fields:[
            { name: "otra_negociacion", label: 'Otra Negociación', size: "col-lg-4", type: "slide" },
            { name: "wpc", label: 'WPC', size: "col-lg-4", type: "slide" },
            { name: "sin_contacto", label: 'Sin Contacto', size: "col-lg-4", type: "slide" }
          ]
        }
        
      ],
      title: "Crear Codigo",
      buttons: [
        { title: 'Aceptar', class: 'btn btn-success', size: 'col-lg-12' }
      ]
    }
  }

  getconfAddModel() {
    return {
      rows: [
        {
          fields: [
            { name: "nombre", label: 'nombre', size: "col-lg-12", type: "text",data:null  }
          ]
        },
        {
          fields: [
            { name: "url", label: 'url', size: "col-lg-12", type: "text",data:null  }
          ]
        }
      ],
      title: "crear_modelo",
      buttons: [
        { title: 'Aceptar', class: 'btn btn-success', size: 'col-lg-12' }
      ]
    }
  }

}
