import React from 'react'
import { useCardContext } from '../Contexts/CardContext'
function CardNo() {
    const { cardNumber } = useCardContext();
    return (
        <>
            <ul className=' d-flex p-0 m-0  position-absolute top-42 start-15 z-index-2'>
                <li className='cardNumber list-unstyled px-3 py-1 fw-semibold text-dark fs-1'>
                    {
                        cardNumber[0] !== undefined ? cardNumber[0] : "*"
                    }
                    {
                        cardNumber[1] !== undefined ? cardNumber[1] : "*"
                    }
                    {
                        cardNumber[2] !== undefined ? cardNumber[2] : "*"
                    }
                    {
                        cardNumber[3] !== undefined ? cardNumber[3] : "*"
                    }
                </li>
                <li className='cardNumber list-unstyled px-3 py-1 fw-semibold text-dark fs-1'>
                    {
                        cardNumber[4] !== undefined ? cardNumber[4] : "*"
                    }
                    {
                        cardNumber[5] !== undefined ? cardNumber[5] : "*"
                    }
                    {
                        cardNumber[6] !== undefined ? cardNumber[6] : "*"
                    }
                    {
                        cardNumber[7] !== undefined ? cardNumber[7] : "*"
                    }
                </li>
                <li className='cardNumber list-unstyled px-3 py-1 fw-semibold text-dark fs-1'>
                    {
                        cardNumber[8] !== undefined ? cardNumber[8] : "*"
                    }
                    {
                        cardNumber[9] !== undefined ? cardNumber[9] : "*"
                    }
                    {
                        cardNumber[10] !== undefined ? cardNumber[10] : "*"
                    }
                    {
                        cardNumber[11] !== undefined ? cardNumber[11] : "*"
                    }
                </li>
                <li className='cardNumber list-unstyled px-3 py-1 fw-semibold text-dark fs-1'>
                    {
                        cardNumber[12] !== undefined ? cardNumber[12] : "*"
                    }
                    {
                        cardNumber[13] !== undefined ? cardNumber[13] : "*"
                    }
                    {
                        cardNumber[14] !== undefined ? cardNumber[14] : "*"
                    }
                    {
                        cardNumber[15] !== undefined ? cardNumber[15] : "*"
                    }
                </li>
            </ul>
        </>
    )
}





export default CardNo