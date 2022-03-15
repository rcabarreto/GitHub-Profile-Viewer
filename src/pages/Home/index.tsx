import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const [username, setUsername] = React.useState<string>('');

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate('/user/' + username);
    setUsername('');
  };

  return (
    <div className="p-1 m-1 text-center bg-light">
      <div className="col-md-8 p-lg-6 mx-auto my-5">
        <div className="row g-3 align-items-center justify-content-center">
          <form onSubmit={onFormSubmit}>
            <div className="col-auto">
              <h4>Github profile search:</h4>
            </div>
            <div className="col-auto">
              <input
                type="search"
                className="form-control"
                id="userSearch"
                value={username}
                placeholder="Search..."
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setUsername(e.currentTarget.value)}
              />
            </div>

            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Go!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
