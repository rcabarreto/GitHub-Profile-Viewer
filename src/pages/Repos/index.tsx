import React from 'react';
import { useAppSelector } from '../../hooks';
import { selectRepos } from '../../redux/slices/repoSlice';
import LeadText from '../../components/LeadText';
import { RepoType } from '../../types';

const UserDetails = () => {
  const repos: RepoType[] = useAppSelector(selectRepos);

  if (!repos.length) return <LeadText message="There are no Repositories for this user." />;

  return (
    <div>
      {repos.map((item) => (
        <RepoItem key={item.id} {...item} />
      ))}
    </div>
  );
};

const RepoItem: React.FC<RepoType> = ({ id, name, description, language }) => (
  <div key={id} className="card mb-4 mt-4">
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{description}</p>
      {!!language && <span className="badge rounded-pill bg-primary">{language}</span>}
    </div>
  </div>
);

export default UserDetails;
