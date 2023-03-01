import React from 'react';

const UserCard = ( {user, fullName} ) => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center">
        <img src={user.picture.large} alt="user profile" />
      </div>
      <div className="mt-5">
        <h2>{fullName}</h2>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
