import { Pipe, PipeTransform } from '@angular/core';
import { UserTarget, UserResponse} from '../../interfaces/gtr/dynamic-requests';

@Pipe({
  name: 'filterUsers',
})
export class FilterUsersPipe implements PipeTransform {
  transform(users: UserTarget[], searchText: string): UserTarget[] {
    if (!searchText) {
      return users;
    }
    return users.filter(user =>  user.user.toLowerCase().includes(searchText.toLowerCase()));
  } 
}

@Pipe({
  name: 'filterUsernames',
})
export class FilterUsernamesPipe implements PipeTransform {
  transform(users: UserResponse[], searchText: string): UserResponse[] {
    if (!searchText) {
      return users;
    }
    return users.filter(user => user.username.toLowerCase().includes(searchText.toLowerCase()));
  }
}  