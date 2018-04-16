/**
 * Store of the State Manager
 */
export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };

  constructor(reducers = {}, initialState = {}) {
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }

  /**
  * Getter for state property
  */
  get value() {
    return this.state;
  }

  dispatch(action: any) {
    // Create a new object adding the new todo on the array
    this.state = this.reduce(this.state, action);
  }

  /**
  * This could be confusing but is a Design Pattern called Command Pattern.
  * And is calling all the reducers giving it the state and the the action,
  * the reducers with the action passed will trigger.
  *
  * @param state The state itself
  * @param action The action to perform
  */
  private reduce(state, action) {
    const newState = {};

    for (const prop in this.reducers) {
      newState[prop] = this.reducers[prop](state[prop], action);
    }

    return newState;
  }
}
