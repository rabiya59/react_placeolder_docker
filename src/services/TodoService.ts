import { Todo } from "../modeles/Todo.type";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

class TodoService {

    /**
     * Récupère toutes les taches
     * @returns Promise
     */
    getTaches(): Promise<Response>{
        const promesse = fetch(API_URL, {method: 'GET'});
        return promesse;
    }


    /**
     * Récupère une tache
     * @returns Promise
     */
    getTache(todoId: number): Promise<Response>{
        console.log(`${API_URL}/${todoId}`)
        const promesse = fetch(`${API_URL}/${todoId}`, {method: 'GET'});
        return promesse;
    }

    /**
     * Créer une tache
     * @param tache {Todo}
     * @returns Promise
     */
    postTache(tache: Todo): Promise<Response>{
        return fetch(API_URL, {
            method: "POST",
            // conversion en chaine de caractère de l'objet Todo pour la requete
            body: JSON.stringify(tache),
        })
    }

}

export default Object.freeze(new TodoService());
