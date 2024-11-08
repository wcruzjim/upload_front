import { Response } from "../../models/Response";
import { AutomaticResponseDataShift, ReadeableShifts } from "../Turnos/AutomaticShifts";

/**
 * Response interface representing the count of pending tasks.
 *
 * @export
 * @interface PendingTasksCount
 * @extends {Response}
 */
export interface PendingTasksCount extends Response {
	result: number;
}

/**
 * Response interface representing the result of the task.
 *
 * @export
 * @interface PendingTasksCount
 * @extends {Response}
 */
export interface TaskResult extends Response {
	result: [resultado: AutomaticResponseDataShift, resultado2: number];
}

export interface TaskResultAttribute extends Response {
	result:  Array<ReadeableShifts>;
}

export interface ValidationsFile extends Response {
	result: string;
}


/**
 * Contains an array of 'ShiftTaskStatus' objects representing pending tasks.
 *
 * @export
 * @interface PendingTasks
 * @extends {Response}
 */
export interface PendingTasks extends Response {
	result: ShiftTaskStatus[];
}

/**
 * Interface representing the status of a shift task.
 *
 * @export
 * @interface ShiftTaskStatus
 */
export interface ShiftTaskStatus {
	id: string;
	pcrc: string;
	id_proceso: string;
	porcentaje: string;
	estado: string;
	duracion: string;
	creador: string;
	creado: string;
}
