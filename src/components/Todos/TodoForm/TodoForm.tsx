import {
    ChangeEvent,
  FormEventHandler,
  FunctionComponent,
  ReactElement,
} from "react";
import { Todo } from "../../../modeles/Todo.type";

type TodoFormProps = {
  todo: Todo;
  // handleSubmit: ()=>{},
  handleSubmit: FormEventHandler;
  // handleChange: (event: ChangeEvent)=>{},
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const TodoForm: FunctionComponent<TodoFormProps> = ({
  todo,
  handleSubmit,
  handleChange,
}: TodoFormProps): ReactElement => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Titre de la tache</label>
      <input
        type="text"
        name="title"
        id="title"
        value={todo.title}
        onChange={handleChange}
        onClick={console.log}
      />
      <button type="submit">Valider</button>
    </form>
  );
};

export default TodoForm;
