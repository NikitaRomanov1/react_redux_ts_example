export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export enum TodoActionTypes {
  FETCH_TODOS = "FETCH_TODOS", //загрузка дел
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS", //успешная загрузка
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR", //ошибка
  SET_TODO_PAGES = "SET_TODO_PAGES", //изменение страницы
}

interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODOS;
}
interface FetchTodoSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: any;
}
interface FetchTodoErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}
interface SetTodoPage {
  type: TodoActionTypes.SET_TODO_PAGES;
  payload: number;
}

export type TodoAction =
  | FetchTodoAction
  | FetchTodoErrorAction
  | FetchTodoSuccessAction
  | SetTodoPage;
