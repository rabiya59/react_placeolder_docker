const API_URL = "https://jsonplaceholder.typicode.com/users"

class UserService {

    getUsers(): Promise<Response>{
        return fetch(API_URL);
    }

}

export default Object.freeze(new UserService());

/*
 Pourquoi Object.freeze?

 En JS (ou TS) on peut trés facilement réécrire le contenu d'une variable...
 et les fonctions sont stocké dans des variables
 Et donc on peut modifier le comportement des fonction n'importe quand

 Sauf quand on Freeze (gèle) un objet

 On empêche de modifer la classe en dehors de ce fichier.
 */
