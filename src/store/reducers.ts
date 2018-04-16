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
  action: actionModel
) {
  switch (action.type) {
    // The action to add an item to the todo list
    case 'ADD_TODO': {
      const todo = action.payload;
      const data = [...state.data, todo];

      return {
        ...state,
        data
      }
    }
  }

  return state;
}

/**
 * The model of our actions
 */
interface actionModel {
  type: string;
  payload: any;
}