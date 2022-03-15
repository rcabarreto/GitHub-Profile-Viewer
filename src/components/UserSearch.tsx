import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserSearch: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState<string>('');

  const onFormSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    navigate('/user/' + username);
    setUsername('');
  };

  return (
    <div>
      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" onSubmit={onFormSubmit}>
        <input
          type="search"
          className="form-control"
          id="userSearch"
          value={username}
          placeholder="Search..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setUsername(e.currentTarget.value)}
        />
      </form>
    </div>
  );
};

export default UserSearch;
