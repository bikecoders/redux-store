import { actionModel } from "./actions";

/**
 * Store of the State Manager
 */
export class Store {
  /**
   * Array list of the subscribers.
   * This is a Design Patter called Observer Pattern
   */
  private subscribers: Function[];

  /**
   * All the reducers
   */
  private reducers: { [key: string]: Function };

  /**
   * The state of the app
   */
  private state: { [key: string]: any };

  /**
   * The constructor of the store,
   *
   * @param reducers The reducers themselves
   * @param initialState The initial state
   */
  constructor(reducers = {}, initialState = {}) {
    this.subscribers = [];
    this.reducers = reducers;
    this.state = this.executeAllReducers(initialState, {});
  }

  /**
  * Getter for state property
  */
  get value() {
    return this.state;
  }

  /**
   * Subscribe to know when the state changes.
   * On subscription it will get the current state immediately
   *
   * @param fn A function to execute when something happen
   *
   * @returns A function, is case of be executed will be remove the subscriber passed by parameter
   */
  subscribe(fn: Function): Function {
    this.subscribers = [...this.subscribers, fn];
    // Notify
    this.notify();

    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== fn);
    }
  }

  /**
   * Dispatch an action
   * @param action The action to dispatch
   */
  dispatch(action: actionModel) {
    // Create a new object adding the new todo on the array
    this.state = this.executeAllReducers(this.state, action);
    // Notify the changes
    this.notify();
  }

  /**
   * Iterate all the subscribers and execute the functions that they tell us to do
   */
  private notify() {
    this.subscribers.forEach((subr: Function) => subr(this.value) );
  }

  /**
  * This could be confusing but is a Design Pattern called Command Pattern.
  * And is calling all the reducers giving it the state and the the action,
  * the reducers will catch the action passed if it correspond.
  *
  * @param state The state itself
  * @param action The action to perform
  */
  private executeAllReducers(state, action) {
    const newState = {};

    for (const prop in this.reducers) {
      newState[prop] = this.reducers[prop](state[prop], action);
    }

    return newState;
  }
}
