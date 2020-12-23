import React, {createContext, useState, useEffect} from 'react';

export const DateContext = createContext();

const DateContextProvider = (props) => {
    const [dates, setDate] = useState([]);
    const [datePick, setDatePick] = useState(new Date());

    const getDatesBetweenDates = (startDate, endDate) => {
        let dates = [];
        const theDate = new Date(startDate);
        while (theDate < endDate) {
          dates = [...dates, new Date(theDate)];
          theDate.setDate(theDate.getDate() + 1);
        }
        return dates;
    };

    const setDatePickHandler = (tes) => {
        setDatePick(tes);
    };

    useEffect(() => {
        let today = new Date();
        let twoWeeks = new Date(today);
        twoWeeks.setDate(twoWeeks.getDate() + 14);
        setDate(getDatesBetweenDates(today, twoWeeks));
    }, []);
    return (
        <DateContext.Provider 
            value={
                {
                    setDatePickHandler,
                    datePick,
                    dates
                }
            }
        >
            {props.children}
        </DateContext.Provider>
    )
}

export default DateContextProvider
