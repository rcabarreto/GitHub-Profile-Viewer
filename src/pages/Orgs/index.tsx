import React from 'react';
import { useAppSelector } from '../../hooks';
import { selectOrganizations } from '../../redux/slices/orgSlice';
import LeadText from '../../components/LeadText';
import { OrganizarionType } from '../../types';

const UserDetails = () => {
  const orgs: OrganizarionType[] = useAppSelector(selectOrganizations);

  if (!orgs.length) return <LeadText message="There are no Organizations for this user." />;

  return (
    <div className="mt-4">
      {orgs.map((item) => (
        <OrgItem key={item.id} {...item} />
      ))}
    </div>
  );
};

const OrgItem: React.FC<OrganizarionType> = ({ id, login, description, avatar_url }) => (
  <div key={id} className="card mb-4 mt-4">
    <div className="row">
      <div className="col-md-2">
        <img src={avatar_url} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-10">
        <div className="card-body">
          <h5 className="card-title">{login}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

export default UserDetails;
