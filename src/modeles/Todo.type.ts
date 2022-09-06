// Représentation programmatique des caractèristiques d'une intité métier (coté API qui normalement ressemble à ce qui est dans la bdd)
export type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
