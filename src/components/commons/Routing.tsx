import { ReactElement } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TodoDetail from "../../pages/TodoDetail";
import TodosPage from "../../pages/Todos.page";
import UserPage from "../../pages/User.page";

type RoutingProps = {
  children: ReactElement
}

const Routing = ({children}: RoutingProps) => {
  return (
    // Wrapper pour la navigation (équivalent du router outlet d'Angular)
    <Router>
      {children}
      {/* Switch permet de changer la page (charger le composant page) */}
      <Switch>
        {/* Redirect redirige vers une autre URL si un utilisateur navigue vers le path */}
        {/* exact indique le path doit matcher parfaitement */}
        <Redirect exact path="/" to="/todos" />
        {/* Route permet de définir la page qui affiche le composant Page */}
        <Route exact path="/todos">
          {/* Le composant page est transmit en enfant du composant Route */}
          <TodosPage />
        </Route>
        <Route exact path="/users">
          <UserPage />
        </Route>
        {/* Route avec un paramètre
          le paramaètre est nommé "todoId"
          on peut le récupérer avec useParams() de react-router-dom
        */}
        <Route path="/todos/:todoId">
          <TodoDetail />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routing;
