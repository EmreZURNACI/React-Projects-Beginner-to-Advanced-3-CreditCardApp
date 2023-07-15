import React, { useEffect } from 'react'
import WebFont from 'webfontloader';
function BankName() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Droid Sans', 'Chilanka', "Roboto", "Fjalla One","fasthand"]
            }
        });
    }, []);
    return (
        <div className='position-absolute z-index-2 bankname font-loader fw-bolder fs-4 text-secondary p-3'>
            <span> EMREBANK</span>
        </div>
    )
}

export default BankName