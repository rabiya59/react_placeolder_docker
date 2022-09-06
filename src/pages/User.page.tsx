import { useEffect, useState } from "react";
import UserCard from "../components/Users/UserCard";
import { User } from "../modeles/User.type";
import UserService from "../services/UserService";

const UserPage = () => {
  useEffect(() => {
    UserService.getUsers()
      .then((resp) => resp.json())
      .then((users_resp) => {
        setUsers(users_resp);
      });
  }, []);

  const [users, setUsers] = useState<User[]>([]);

  return (
    <div>
      <h2>Liste d'utilisateurs</h2>

      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserPage;
