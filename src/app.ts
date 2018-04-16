import * as fromStore from './store';

import { renderTodos } from './utils';

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

const store = new fromStore.Store({}, {
  todos: [{
    label: 'Eat Pizza', complete: false
  }]
});

/**
 * When the user clicks on "Add ToDo" dispatch the action to create a new todo
 */
button.addEventListener(
  'click',
  () => {
    // If it is only spaces, do nothing...
    if (!input.value.trim()) return;

    const payload = { label: input.value, complete: false };

    // Dispatch the action to add a todo
    store.dispatch({
      type: 'ADD_TODO',
      payload
    });

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
