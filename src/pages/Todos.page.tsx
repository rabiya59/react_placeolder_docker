import {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { Todo } from "../modeles/Todo.type";
import TodoItem from "../components/Todos/Todo/TodoItem";
import TodoService from "../services/TodoService";
import TodoForm from "../components/Todos/TodoForm/TodoForm";

const TodosPage: FunctionComponent = (): ReactElement => {
  const [tache, setTache] = useState<Todo>({
    title: "",
    completed: false,
    // #TODO générer un id unique
    id: 665465,
    userId: 1,
  });

  const [taches, setTaches] = useState<Todo[]>([
    {
      id: 1,
      userId: 4,
      completed: false,
      title: "Faire une todolist en ReactTS",
    },
  ]);

  useEffect(() => {
    console.log("first");
    refreshTodo();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nouvelleTache = {
      ...tache,
      [event.target.name]: event.target.value,
    };

    setTache(nouvelleTache);
  };

  /**
   * Récupérer les taches
   */
  const refreshTodo = () => {
    TodoService.getTaches()
      .then((resp: Response) => resp.json())
      .then((taches_resp: Todo[]) => setTaches(taches_resp));
  }

  const handleSubmit = (event: FormEvent) => {
    // éviter le rechargement
    event.preventDefault();
    // je filtre la liste de taches pour retirer ma tache
    // const listeFiltree = taches.filter((elem) => elem !== tache)
    // // j'ajoute ma tache à une nouvelle liste
    // // const nouvelleListeTaches = [
    // //   tache,
    // //   ...listeFiltree,
    // // ]
    // listeFiltree.unshift(tache);
    // setTaches(listeFiltree);
    // Envoyer la tache dans l'API
    TodoService.postTache(tache)
      .then((resp) => {
        console.log(resp);
        refreshTodo();
        return resp;
      })
      .then((resp) => resp.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <div>
        <h2>Ajouter une tache</h2>

        <TodoForm
          todo={tache}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <div>
        <h2>Liste des taches</h2>

        <ul>
          {taches.map((tache) => (
            <TodoItem key={tache.id} todo={tache} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodosPage;


