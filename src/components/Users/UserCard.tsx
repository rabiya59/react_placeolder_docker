import { FunctionComponent, ReactElement } from 'react';
import { User } from '../../modeles/User.type';
import './UserCard.css';

type UserCardProps = {
  user: User;
}

const UserCard: FunctionComponent<UserCardProps> = ({user}: UserCardProps): ReactElement => {
  return (
    <div className='card'>
      <div className='card-header'>
        <h3>{user.name}</h3>
        <h4>{user.username}</h4>
      </div>
      <div className="card-body">
        <ul>
          <li>{user.company.name}</li>
          <li><a href={'poulet'}>{user.website}</a></li>
          <li><a href={`mailto:${user.email}`}>Contacter par mail</a></li>
          <li><a href={`tel:${user.phone}`}>Appeler</a></li>
        </ul>
      </div>
    </div>
  )
}

export default UserCard