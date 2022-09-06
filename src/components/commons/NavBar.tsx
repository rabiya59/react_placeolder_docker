import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
        {/* NavLink redirige en interne */}
        <NavLink to="/todos"><button>Liste de todos</button></NavLink>
        <NavLink to="/users"><button>Liste d'utilisateurs</button></NavLink>
    </div>
  )
}

export default NavBar;
