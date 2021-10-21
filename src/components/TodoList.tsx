import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {
  const { page, error, limit, todos, loading } = useTypedSelector(
    (state) => state.todo
  );

  const { fetchTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];
  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <div>Загрузка...</div>;
  }
  if (error) {
    return <div>Ошибка!</div>;
  }
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          {todo.id} - {todo.title}
        </div>
      ))}
      <div style={{ display: "flex" }}>
        {pages.map((p, index) => (
          <div
            onClick={() => {
              setTodoPage(p);
            }}
            style={{
              border: p === page ? "2px solid green" : "1px solid black",
              padding: 10,
            }}
            key={index}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
