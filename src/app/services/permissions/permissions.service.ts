import { Injectable } from '@angular/core';
import { UserInfoSharedService } from '../userInfoShared/userIInfoShared.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  spacesvisibility = [
    { name: 'Reporting', id: 540 },
    { name: 'Desempeño', id: 541 },
    { name: 'Todos', id: 542 }
  ]
  permissions;

  constructor(
    private readonly userShared: UserInfoSharedService
  ) {
    // This is intentional
  }

  /**
    * Parámetro que obtiene el permiso a validar
    * @param id_action
  */

  validateAction(id_action) {
    /** Obtenemos las acciones a las que tiene permiso el usuario */
    this.permissions = this.userShared.getUser();
    let permissions = this.permissions;
    if (permissions != null && typeof id_action != "undefined" && typeof id_action == "string") {
      let exist = [];
      /** Recorremos las acciones */
      if (typeof id_action != 'undefined') {
        if (permissions.actions.includes("100") || permissions.actions.includes("438")){
          exist.push(true);
        }
        permissions.actions.forEach(element => {
          if (element === id_action) {
            exist.push(true)
          }
        });
      }

      if (exist.length > 0) {
        return true;
      } else {
        return false;
      }
    } else if (permissions != null && typeof id_action != "undefined" && typeof id_action == "object") {
      id_action.unshift("100");
      return this.validateActionArray(id_action, permissions);
    } else {
      return false;
    }
  }

  validateActionArray(id_action, permissions) {
    let toReturn = false;
    id_action.forEach(element => {
      if (permissions.actions.includes(element)) {
        toReturn = true;
      }
    });
    return toReturn;
  }

  getPermisionVisibility() {
    let result = []
    let datauser = this.userShared.getUser();
    if (datauser.actions.length > 0) {
      datauser.actions.forEach(element => {
        if (this.spacesvisibility.length > 0) {
          this.spacesvisibility.forEach(element2 => {
            if (parseInt(element) == element2.id) {
              result.push(element)
            }
          });
        }
      });
    }
    return result;
  }
}
