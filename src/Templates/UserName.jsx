import React from 'react';
import { useCardContext } from '../Contexts/CardContext';
function UserName() {
  const { cardName } = useCardContext();
  return (
    <div className='border border-1 border-light rounded-2 w-75 py-1 px-2 d-flex flex-column'>
      <span className='fs-6 fw-semibold ps-3 fasthand fst-italic'>Card Holder</span>
      <p className='cardName pb-1 ps-1 m-0'>{cardName && cardName}</p>
    </div>
  )
}

export default UserName