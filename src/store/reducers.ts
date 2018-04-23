import * as Actions from "./actions";

/**
 * Declaring the initial state.
 * Define its default properties
 */
export const initialState = {
  loaded: false,
  loading: false,
  data:  [{
    label: 'Eat Pizza', complete: false
  }],
};

/**
 * The reducer itself, catching all the actions
 *
 * @param state The actual state, if no provided put the initial
 * @param action Action that was dispatched
 */
export function reducer(
  state: any = initialState,
  action: Actions.actionModel
) {
  switch (action.type) {
    // The action to add an item to the todo list
    case Actions.ADD_TODO: {
      const todo = action.payload;
      const data = [...state.data, todo];

      return { ...state, data };
    }

    // Action for remove a todo
    case Actions.REMOVE_TODO: {
      // Remove the given todo
      const data = state.data.filter(
        todo => todo.label !== action.payload.label
      );

      return { ...state, data };
    }
  }

  return state;
}
