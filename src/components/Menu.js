import React,{useContext} from 'react';
import "./Menu.css";
import moment from 'moment';

import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import { FoodContext } from '../contexts/FoodContext';
import { DateContext } from '../contexts/DateContext';

const Menu = () => {
    const {meals, numberWithCommas, handleAddClick} = useContext(FoodContext)
    const {datePick} = useContext(DateContext)

    const StyledRating = withStyles({
        iconFilled:{
          color: "#f9423a"
        }
    })(Rating);

    return (
        <div className="menu-app">
            <h1 className="card-text-title">{moment(datePick).format("ddd, DD MMMM YYYY")}</h1>
            {
                meals.map(meal => (
                    <div key={meal.id} className="card">
                    <img src={meal.imgSrc} alt="menu" />
                    <div className="card-text">
                        <div className="rating">
                        <p className="card-text-subtext">{meal.rating}</p>
                        <StyledRating precision={0.5} name="disabled" value={meal.rating} disabled />
                        </div>
                        <h3 className="card-text-title">{meal.name}</h3>
                        <p className="card-text-subtext">by kulina Uptown Lunch</p>
                        <div className="price">
                        <p>{numberWithCommas(meal.price)}</p>
                        <button value={meal.price} onClick={handleAddClick} className="add-button">
                            ADD &#43;
                        </button>
                        </div> 
                    </div>
                    </div>        
                ))
            }
        </div>
    )
}

export default Menu
