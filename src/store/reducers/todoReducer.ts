import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo";

const initialState: TodoState = {
  todos: [],
  error: null,
  limit: 10,
  loading: false,
  page: 1,
};

export const todoReducer = (
  state = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return { ...state, loading: true }; //возвращаем все состояние, перезаписываем загрузку
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload }; //перезаписываем лист дел
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return { ...state, error: action.payload }; //перезаписываем ошибки
    case TodoActionTypes.SET_TODO_PAGES:
      return { ...state, page: action.payload }; //перезаписываем номер страницы
    default:
      return state;
  }
};
