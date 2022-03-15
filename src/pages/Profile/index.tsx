import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { selectUserByUsername } from '../../redux/slices/userSlice';
import { UserType } from '../../types';
import { IoLocationOutline } from 'react-icons/io5';
import { BsEnvelope, BsBuilding, BsLink, BsPeopleFill, BsFillPersonCheckFill } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { GoRepo, GoGist } from 'react-icons/go';

const UserDetails: React.FC = () => {
  const { username } = useParams();
  const user: UserType = useAppSelector((state) => selectUserByUsername(state, username || ''));

  return (
    !!user && (
      <div className="container mt-4">
        <div className="row">
          <div className="col" style={{ fontSize: 18 }}>
            {!!user.company && (
              <div className="py-1">
                <BsBuilding /> {user.company}
              </div>
            )}
            {!!user.blog && (
              <div className="py-1">
                <BsLink /> {user.blog}
              </div>
            )}
            {!!user.location && (
              <div className="py-1">
                <IoLocationOutline /> {user.location}
              </div>
            )}
            {!!user.email && (
              <div className="py-1">
                <BsEnvelope /> {user.email}
              </div>
            )}
            {!!user.twitter_username && (
              <div className="py-1">
                <FiTwitter /> {user.twitter_username}
              </div>
            )}
          </div>
          <div className="col" style={{ fontSize: 18 }}>
            <div className="py-1">
              <GoRepo /> public_repos: {user.public_repos}
            </div>
            <div className="py-1">
              <GoGist /> public_gists: {user.public_gists}
            </div>
            <div className="py-1">
              <BsPeopleFill /> followers: {user.followers}
            </div>
            <div className="py-1">
              <BsFillPersonCheckFill /> following: {user.following}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default UserDetails;
