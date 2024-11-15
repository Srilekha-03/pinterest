import React from 'react';
import Image from 'next/image';

const UserInfo = ({ userInfo }) => {
  console.log(userInfo)
  if (!userInfo) {
    return <div>Loading user info...</div>;  // Display loading message when userInfo is not yet available
  }

  // Check if userName and userimage exist
  const { userName = 'Unknown User', userimage = 'default-image-url', email ="unknown email" } = userInfo;

  return (
    <div className='flex flex-col items-center gap-4'>
        <Image src={userimage} alt='userImage' width={120} height={120} className='rounded-full mt-4'/>
        <h2 className='text-[30px]
        font-semibold'>{userName}</h2>
        <h2 className='text-gray-500'>{email}</h2>
        <button className='bg-gray-200
         p-2 px-3 font-semibold mt-4 rounded-full'>Share</button> 
    </div>
  );
};

export default UserInfo;

