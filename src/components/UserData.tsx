import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { selectUserByUsername } from '../redux/slices/userSlice';
import { UserType } from '../types';

const UserDataComponent: React.FC = () => {
  const { username } = useParams();
  const user: UserType = useAppSelector((state) => selectUserByUsername(state, username || ''));

  if (!user) return null;

  return (
    <div className="position-sticky" style={{ top: '2rem' }}>
      <div className="mb-3">
        <img src={user.avatar_url} className="img-fluid img-thumbnail rounded-circle" alt={``} />
      </div>
      <div>
        <h3 className="mb-3">
          {user.name}
          <br />
          <small>{user.login}</small>
        </h3>
      </div>
      <div className="mb-3">
        <p className="mb-0">{user.bio}</p>
      </div>

      <div className="p-4">
        <h4 className="fst-italic">Archives</h4>
      </div>
    </div>
  );
};

export default UserDataComponent;
