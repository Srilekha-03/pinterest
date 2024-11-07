import React from 'react';

const UserInfo = ({ userInfo }) => {
  // Check if userInfo is undefined or null
  if (!userInfo) {
    return <div>Loading user info...</div>;  // Display loading message when userInfo is not yet available
  }

  // Check if userName and userimage exist
  const { userName = 'Unknown User', userimage = 'default-image-url' } = userInfo;

  return (
    <div>
      <h2>{userName}</h2>  {/* Display userName, fallback to 'Unknown User' */}
      <img src={userimage} alt={userName} />  {/* Display userImage, fallback to default image */}
    </div>
  );
};

export default UserInfo;

