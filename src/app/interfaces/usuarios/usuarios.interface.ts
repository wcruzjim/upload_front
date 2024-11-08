import { Response } from '../../models/Response';

export interface UserListResponse extends Response {
    result: User[]
}
export interface createUserResponse extends Response {
    result: String;
}
export interface deleteUserResponse extends Response {
    result: String;
}
export interface editUserResponse extends Response {
    result: String;
}
export interface changeMyPasswordResponse extends Response {
    result: String;
}

export interface User {
    'id' ? : Number;
    'usuario' : String;
    'password'? : String;
    'email' ? : String;
    'documento' ? : String;
    'fecha_creacion' ? : Date;
    'fecha_modificacion' ? : Date;
    'cambiar_password' ? : Number;
    'activo' : String;
}
