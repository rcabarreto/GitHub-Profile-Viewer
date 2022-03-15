import React from 'react';
import { useAppSelector } from '../../hooks';
import { selectGists } from '../../redux/slices/gistSlice';
import LeadText from '../../components/LeadText';
import { GistType } from '../../types';

const UserDetails = () => {
  const gists: GistType[] = useAppSelector(selectGists);

  if (!gists.length) return <LeadText message="There are no Gists for this user." />;

  return (
    <div>
      {gists.map((item) => (
        <GistItem key={item.id} {...item} />
      ))}
    </div>
  );
};

const GistItem: React.FC<GistType> = ({ id, description }) => (
  <div key={id} className="card mb-4 mt-4">
    <div className="card-body">
      <h5 className="card-title">{id}</h5>
      <p className="card-text">{description}</p>
    </div>
  </div>
);

export default UserDetails;
