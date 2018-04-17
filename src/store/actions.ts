/**
 * The model of our actions
 */
export interface actionModel {
  readonly type: string;
  payload: any;
}

/**
 * [Todo] means that is related with the todo
 * Just add a todo
 */
export const ADD_TODO = '[Todo] Add Todo'

/**
 * An action creator
 * for Add todo
 */
export class AddTodo implements actionModel{
  readonly type = ADD_TODO;

  constructor(public payload: any){};
}