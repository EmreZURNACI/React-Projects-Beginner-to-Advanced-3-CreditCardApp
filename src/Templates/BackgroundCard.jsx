import React from 'react';
import Form from './Form.jsx';
import Card from './Card.jsx';
function BackgroundCard() {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-6 mx-auto">
                    <Card/>
                    <div className='col-10 mx-auto p-5 form-shadow position-absolute start-0 end-0 w-50 top-35 mt-3'>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackgroundCard