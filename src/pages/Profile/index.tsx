import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { selectUserByUsername } from '../../redux/slices/userSlice';
import { UserType } from '../../types';

const UserDetails = () => {
  const { username } = useParams();

  const user: UserType = useAppSelector((state) => selectUserByUsername(state, username || ''));

  return (
    !!user && (
      <>
        <h3 className="pb-4 mb-4 fst-italic border-bottom">Profile</h3>
      </>
    )
  );
};

export default UserDetails;
