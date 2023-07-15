import React from 'react';
import { useCardContext } from '../Contexts/CardContext';
function Form() {
    const { cardName, setCardName, cardNumber, setCardNumber, month, setMonth, year, setYear, cvv, setCvv } = useCardContext();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const years = () => {
        let thisyear = new Date().getFullYear();
        let arr = [];
        for (let i = 1; i <= 12; i++) {
            thisyear++;
            arr.push(thisyear);
        }
        return arr;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(cardName, cardNumber, month, year, cvv)
    }
    const handleFocus = (e) => {
        if (e.target.id === "cvv") {
            document.querySelector(".card .card-side.front").style.transform = "rotateY(180deg)";
            document.querySelector(".card .card-side.back").style.transform = "rotateY(0deg)";
        }
        let items = document.querySelectorAll(`.${e.target.id}`);
        items.forEach((item) => {
            item.classList.add("focus");
        })
    }
    const handleRemoveFocus = (e) => {
        if (e.target.id === "cvv") {
            document.querySelector(".card .card-side.front").style.transform = "rotateY(0deg)";
            document.querySelector(".card .card-side.back").style.transform = "rotateY(180deg)";
        }
        let items = document.querySelectorAll(`.${e.target.id}`);
        items.forEach((item) => {
            item.classList.remove("focus");
        })
    }
    const handleLengthCheck = (e) => {
        switch (e.target.id) {
            case "cvv":
                if ((e.keyCode === 46) || (e.keyCode === 8) || (e.keyCode === 37) || (e.keyCode === 38) || (e.keyCode === 39) || (e.keyCode === 40)) {
                }
                else {
                    if (e.target.value.length >= 3) {
                        e.preventDefault();
                        alert("Max Length 3 charachter")
                    }
                }
                break;
            case "cardNumber":
                if ((e.keyCode === 46) || (e.keyCode === 8) || (e.keyCode === 37) || (e.keyCode === 38) || (e.keyCode === 39) || (e.keyCode === 40)) {
                }
                else {
                    if (e.target.value.length >= 16) {
                        e.preventDefault();
                        alert("Max Length 16 charachter")
                    }
                }
                break;
            default: break;
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit} className='d-flex flex-column gap-2'>
                <div>
                    <label htmlFor="cardNumber" className='form-label'>Card Number :</label>
                    <input
                        type="number"
                        name="cardNumber"
                        id='cardNumber'
                        onChange={(e) => { setCardNumber(e.target.value) }}
                        className="form-control border border-1 border-secondary"
                        onFocus={handleFocus}
                        onBlur={handleRemoveFocus}
                        onKeyDown={handleLengthCheck}
                    />
                </div>
                <div>
                    <label htmlFor="cardName" className='form-label'>Card Name :</label>
                    <input
                        type="text"
                        name="cardName"
                        id='cardName'
                        onChange={(e) => setCardName(e.target.value)}
                        className="form-control border border-1 border-secondary"
                        onFocus={handleFocus}
                        onBlur={handleRemoveFocus}
                    />

                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <label className='fs-6'>Expiration Date</label>
                        <div className='d-flex gap-2'>
                            <>
                                <select name="month" id="month" onChange={(e) => setMonth(e.target.value)}
                                    className="form-select border border-1 border-secondary" onFocus={handleFocus}
                                    onBlur={handleRemoveFocus}>
                                    <option value=" " selected >Month</option>
                                    {
                                        months.map((month, index) => (
                                            <option key={index} value={index + 1} >{month}</option>
                                        ))
                                    }
                                </select>
                            </>
                            <>
                                <select name="year" id="year" onChange={(e) => setYear(e.target.value)}
                                    className="form-select border border-1 border-secondary" onFocus={handleFocus}
                                    onBlur={handleRemoveFocus}>
                                    <option value=" " selected >Year</option>
                                    {
                                        years().map((year, index) => (
                                            <option key={index} value={year} >{year}</option>
                                        ))
                                    }
                                </select>
                            </>
                        </div>
                    </div>
                    <div>
                        <label>CVV</label>
                        <div>
                            <input
                                type="number"
                                name="cvv"
                                id='cvv'
                                onChange={(e) => setCvv(e.target.value)}
                                className="form-control border border-1 border-secondary"
                                maxLength={3} minLength={3}
                                onFocus={handleFocus}
                                onBlur={handleRemoveFocus}
                                onKeyDown={handleLengthCheck}
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className='btn btn-primary' disabled={
                    year === " " || month === " " ||
                    String(cvv).length !== 3
                    || (cardNumber.includes('*') !== false)
                    || (cardName === null) || (String(cardName).trim() === "")
                }
                >
                    Submit
                </button>
            </form >
        </>
    )
}

export default Form