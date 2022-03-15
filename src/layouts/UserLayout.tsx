/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link, Outlet, useParams, useResolvedPath, useLocation } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchUserData, selectUserByUsername } from '../redux/slices/userSlice';
import { fetchUserRepos } from '../redux/slices/repoSlice';
import { fetchUserOrganizations } from '../redux/slices/orgSlice';
import { fetchUserGists } from '../redux/slices/gistSlice';
import { UserData } from '../components';
import { UserType } from '../types';

function CustomLink({ children, to }: LinkProps) {
  let resolved = useResolvedPath(to);
  const { pathname } = useLocation();
  const match = resolved.pathname === pathname;

  return (
    <li className="nav-item">
      <Link to={to} className={match ? 'nav-link active' : 'nav-link'}>
        {children}
      </Link>
    </li>
  );
}

const UserLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  const { username } = useParams();
  const [isLoading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const loadUserData = async () => {
      setLoading(true);
      try {
        setLoading(true);
        await dispatch(fetchUserData(username || ''));
        await dispatch(fetchUserRepos(username || ''));
        await dispatch(fetchUserOrganizations(username || ''));
        await dispatch(fetchUserGists(username || ''));
      } catch {
        // handle error here
      } finally {
        setLoading(false);
      }
    };
    loadUserData();
  }, [username]);

  const user: UserType = useAppSelector((state) => selectUserByUsername(state, username || ''));

  if (!isLoading && !user) return <div>User not found</div>;

  return (
    !!user && (
      <div className="row g-5">
        <div className="col-md-3">
          <UserData />
        </div>

        <div className="col-md-9">
          <ul className="nav nav-tabs">
            <CustomLink to={`/user/${username}`}>Profile</CustomLink>
            <CustomLink to={`/user/${username}/repos`}>Repos</CustomLink>
            <CustomLink to={`/user/${username}/gists`}>Gists</CustomLink>
            <CustomLink to={`/user/${username}/orgs`}>Organizations</CustomLink>
          </ul>

          <Outlet />
        </div>
      </div>
    )
  );
};

export default UserLayout;
