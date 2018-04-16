import * as fromStore from './store';

import { renderTodos } from './utils';
import { reducer } from './store';

/**
 * The input where the user writes the new todo
 */
const input = document.querySelector('input') as HTMLInputElement;
/**
 * The button to add a new todo
 */
const button = document.querySelector('button') as HTMLButtonElement;
/**
 * The unsubscribe button
 */
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
/**
 * An <ul> element to write down all the todos
 */
const todoList = document.querySelector('.todos') as HTMLLIElement;

/**
 * Declare your reducers
 */
const reducers = {
  todos: fromStore.reducer
};

// Instantiate the store
const store = new fromStore.Store(reducers);

/**
 * When the user clicks on "Add ToDo" dispatch the action to create a new todo
 */
button.addEventListener(
  'click',
  () => {
    // If it is only spaces, do nothing...
    if (!input.value.trim()) return;

    // Create the payload
    const payload = { label: input.value, complete: false };

    // Dispatch the action to add an item
    store.dispatch({
      type: 'ADD_TODO',
      payload
    });

    console.log(store.value);

    input.value = '';
  },
  false
);

todoList.addEventListener('click', function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    console.log(target);
  }
});
