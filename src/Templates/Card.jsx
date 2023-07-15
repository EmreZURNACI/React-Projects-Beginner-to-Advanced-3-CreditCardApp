import React from 'react'
import BankName from './BankName'
import CardNo from './CardNo'
import Chip from './Chip'
import UserInfo from './UserInfo'
import { useCardContext } from '../Contexts/CardContext'
function Deneme() {
    const {cvv}=useCardContext();
    return (
        <div class="card">
            <div class="card-side front">
                <BankName />
                <CardNo />
                <Chip />
                <UserInfo />
            </div>
            <div class="card-side back">
                <div className='top-9 bg-dark position-absolute w-100 h-50px'></div>
                <div className='top-35 position-absolute w-75 start-0 end-0 h-50px d-flex'>
                    <div className='bg-cvv w-100 h-100'></div>
                    <div className='bg-azure  text-dark fs-3 p-1 cvv'>{cvv?cvv:"___"}</div>
                </div>
            </div>
        </div>
    )
}

export default Deneme