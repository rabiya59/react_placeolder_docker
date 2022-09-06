import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TodoItem from "../components/Todos/Todo/TodoItem";
import { Todo } from "../modeles/Todo.type";
import TodoService from "../services/TodoService";

const TodoDetail = () => {
  const [todo, setTodo] = useState<Todo | undefined>();

  //   Récupération du paramètre de la route qui s'appelle todoId (comme précisé dans le routing)
  const { todoId } = useParams<{ todoId: string }>();

  useEffect(() => {

    // appel du service lors de la récup de l'id de la tache
    TodoService.getTache(parseInt(todoId))
    .then((resp) => resp.json())
    .then((todo_resp) => {
        setTodo(todo_resp);
    });

    console.log(todoId);
  }, [todoId]);

  return (
    <div>
      {todo ? (
        <ul>
          <li>id de la tache: {todo?.id}</li>
          <li>Utilisateur id: {todo?.userId}</li>
          <li>intitulé de la tache: {todo?.title}</li>
          <li>La tache est-elle faite?: {todo?.completed}</li>
          <TodoItem todo={todo} />
        </ul>
      ) : (
        <p>Récupération de la tache...</p>
      )}
    </div>
  );
};

export default TodoDetail;
