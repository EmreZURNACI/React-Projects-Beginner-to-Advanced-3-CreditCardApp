import React from 'react'
import UserName from './UserName';
import ExpireTime from './ExpireTime';
function UserInfo() {
  return (
    <div className='fs-4 position-absolute top-72 z-index-2   w-100 py-1 d-flex  align-items-center'>
      <UserName />
      <ExpireTime />
    </div>
  )
}

export default UserInfo