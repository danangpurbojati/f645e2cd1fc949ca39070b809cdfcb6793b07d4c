import React, {createContext, useState, useEffect} from 'react';
import foods from '../TestFood';


export const FoodContext = createContext();
    
const FoodContextProvider = (props) => {
    const [meals, setMeal] = useState([]);
    const [prices, setPrice] = useState(0);
    const [items, setItem] = useState(0);

    useEffect(() => {
        setMeal(foods)
    }, [meals]);

    const numberWithCommas = number => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const handleAddClick = (event) => {
        let priceInteger = parseInt(event.target.value);
        setPrice(prices + priceInteger);
        setItem(items + 1);
    }

    return (
        <FoodContext.Provider 
            value={
                {
                    meals, 
                    numberWithCommas, 
                    handleAddClick, 
                    prices, 
                    items
                }
            }
        >
            {props.children}
        </FoodContext.Provider>
    )
}

export default FoodContextProvider
