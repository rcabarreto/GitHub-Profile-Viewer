import React from 'react';
import { useAppSelector } from '../../hooks';
import { selectGists } from '../../redux/slices/gistSlice';
import LeadText from '../../components/LeadText';
import { GistType } from '../../types';

const UserDetails = () => {
  const gists: GistType[] = useAppSelector(selectGists);

  if (!gists.length) return <LeadText message="There are no Gists for this user." />;

  return (
    <div className="mt-4">
      {gists.map((item) => (
        <GistItem key={item.id} {...item} />
      ))}
    </div>
  );
};

const GistItem: React.FC<GistType> = ({ id, description, files }) => {
  const fileArray = Object.keys(files);

  return (
    <div key={id} className="card mb-4 mt-4">
      <div className="card-body">
        {fileArray.map((file) => (
          <h5 className="card-title">{file}</h5>
        ))}
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default UserDetails;
