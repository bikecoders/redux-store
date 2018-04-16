/**
 * Store of the State Manager
 */
export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };

  constructor(reducers = {}, initialState = {} ) {
    this.state = initialState;
  }

  /**
   * Getter for state property
   */
  get value() {
    return this.state;
  }

  dispatch(action: any) {
    // Create a new object adding the new todo on the array
    this.state = {
      ...this.state,
      todos: [... this.state.todos, action.payload]
    };

    console.log(this.state);
  }
}
