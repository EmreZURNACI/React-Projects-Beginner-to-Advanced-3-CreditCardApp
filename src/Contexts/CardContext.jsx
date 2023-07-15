import { createContext, useContext, useState } from "react";
const CardContext = createContext();
const CardContextProvider = ({ children }) => {
    const [cardName, setCardName] = useState(null);
    const [cardNumber, setCardNumber] = useState("****************");
    const [month, setMonth] = useState(" ");
    const [year, setYear] = useState(" ");
    const [cvv, setCvv] = useState(null);
    const data = {
        cardName, setCardName, cardNumber, setCardNumber, month, setMonth, year, setYear, cvv, setCvv
    }
    return (
        <CardContext.Provider value={data}>
            {
                children
            }
        </CardContext.Provider>
    )
}
export default CardContextProvider;
export const useCardContext = () => useContext(CardContext);