import React from 'react'
import { BsSlashLg } from 'react-icons/bs'
import { useCardContext } from '../Contexts/CardContext';
function ExpireTime() {
  const { month, year } = useCardContext();
  return (
    <div className='d-flex flex-column p-1 align-items-center'>
      <span className='fs-6 fw-semibold ps-2 fasthand fst-italic'>Expires</span>
      <p className='pb-1 m-0'>
        <span className='month'>
          {
            month !== " " && (String(month).length === 1 ? "0" + month : month)
          }
        </span>
        <BsSlashLg className="fs-2"></BsSlashLg>
        <span className='year'>
          {
            year !== " " && String(year).substring(2, 4)
          }
        </span>
      </p>
    </div>
  )
}

export default ExpireTime