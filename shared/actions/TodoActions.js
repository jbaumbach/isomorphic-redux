import request from 'axios';
import util from 'util';

const API_URL = 'https://webtask.it.auth0.com/api/run/wt-milomord-gmail_com-0/redux-tutorial-backend?webtask_no_cache=1';
const LOCAL_API_URL = 'http://localhost:3000/api/v1/todos';

export function getTodos() {
  return {
    type:    'GET_TODOS',
    //promise: new Promise((resolve, reject) => {
    //  console.log(`gotta request some junk`);
    //
    //  request.get(API_URL).then((response) => { console.log(`got: ${util.inspect(response)}`); resolve(response);});
    //})
    promise: request.get(LOCAL_API_URL)
  }
}

export function createTodo(text) {
  return {
    type:    'CREATE_TODO',
    promise: request.post(API_URL, { time: Date.now(), text })
  };
}

export function editTodo(id, text) {
  return {
    type: 'EDIT_TODO',
    id,
    text,
    date: Date.now()
  };
}

export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    id
  };
}
