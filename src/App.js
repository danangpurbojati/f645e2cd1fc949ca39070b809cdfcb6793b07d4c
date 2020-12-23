import React, {useState, useEffect} from 'react';
import './App.css';
import menu from './assets/menu1.jpg';
import Modal from '@material-ui/core/Modal';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import moment from 'moment';
import foods from './DummyFood';


function App() {
  const [meals, setMeal] = useState([]);
  const [showSearch, setShowSearch] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dinnerActive, setdinnerActive] = useState(true)
  const [showDinner, setShowDinner] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [dates, setDate] = useState([]);
  const [prices, setPrice] = useState(0);
  const [items, setItem] = useState(0);
  const [datePick, setDatePick] = useState(new Date());

  const handleAddClick = (event) => {
    let priceInteger = parseInt(event.target.value);
    setPrice(prices + priceInteger);
    setItem(items + 1);
  }
  
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    // setShowDinner((scrollPos > currentScrollPos && scrollPos - currentScrollPos > 30) || currentScrollPos < 10);
    setShowDinner(scrollPos > currentScrollPos);
    setScrollPos(currentScrollPos)
  }

  const getDatesBetweenDates = (startDate, endDate) => {
    let dates = [];
    const theDate = new Date(startDate);
    while (theDate < endDate) {
      dates = [...dates, new Date(theDate)];
      theDate.setDate(theDate.getDate() + 1);
    }
    return dates;
  }

  const onChangeSearch = event => {
    if(event.target.value.length > 2){
      setShowSearch(true);
    }else{
      setShowSearch(false);
    }
  }

  const setDatePickHandler = (tes) => {
    setDatePick(tes);
  }

  const numberWithCommas = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    setMeal(foods)
  }, [meals])

  useEffect(() => {
    let today = new Date();
    let twoWeeks = new Date(today);
    twoWeeks.setDate(twoWeeks.getDate() + 14);
    setDate(getDatesBetweenDates(today, twoWeeks));
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[scrollPos, showDinner])

  const StyledRating = withStyles({
    iconFilled:{
      color: "#f9423a"
    }
  })(Rating);
  return (
    <div>

      <div className="navbar">      
        <div className="location">
          <a className="back-button" href="/#">
            <ArrowBackIcon />
          </a>
          <button onClick={() => setIsModalOpen(true)} className="location-button">
            <p>ALAMAT PENGANTARAN</p>
            <h4>Tokopedia Tower <span><ExpandMoreIcon /></span></h4>
          </button>
        </div>

        <Modal className="modal-container" open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="modal-content">
              <button onClick={() => setIsModalOpen(false)} className="close-button">
                <CloseOutlinedIcon />
              </button>
              <div className="modal-text">
                <h3>Cek makanan yang tersedia di lokasi kamu</h3>
                <div className="search-container">
                  <RoomOutlinedIcon className="search-icon" />
                  <input onChange={onChangeSearch} className="search-location" type="text"/>
                </div>
                {
                  showSearch && (
                    <div className="search-result">
                      <div className="result-detail">
                        <RoomOutlinedIcon />
                        <div className="result-text">
                          <p>Kulina</p>
                          <p>jl abc gang def komplex zef</p>
                        </div>
                      </div>
                      <div className="result-detail">
                        <RoomOutlinedIcon />
                        <div className="result-text">
                          <p>Kulina</p>
                          <p>jl abc gang def komplex zef</p>
                        </div>
                      </div>              
                    </div>
                  )
                }
                
              </div>
          </div>
        </Modal> 

        
        <Splide
          className="date-container"
          options={ {
            perPage: 7,
            pagination: false,
            arrows: false,
            autowidth: true
          } }
        > 
        {
          dates.map(date => (
            (moment(date).format('ddd') === "Sat" || moment(date).format('ddd') === "Sun") ? (
              <SplideSlide key={date} >
                <button disabled className="date">
                  <p className="day">{moment(date).format('ddd')}</p>
                  <p className="date-number">{moment(date).format('DD')}</p>
                </button>
              </SplideSlide>
            ):(
              <SplideSlide key={date} >
                <button 
                  style={(moment(datePick).format('DD') === moment(date).format('DD')) ? {backgroundColor: "#424749", color: "white"} : {backgroundColor: "white"}}
                  onClick={() => setDatePickHandler(date)}
                  className="date">
                  <p className="day">{moment(date).format('ddd')}</p>
                  <p className="date-number">{moment(date).format('DD')}</p>
                </button>
              </SplideSlide>
            )
            
          ))
        }
                 
        </Splide>


        <div style={showDinner ? {display: "block"} : {display: "none"}} className="having-time">
          <button onClick={() => setdinnerActive(!dinnerActive)} className="lunch" 
            style={dinnerActive ? {backgroundColor: "#424749"} : {backgroundColor: "white"}}
          >Lunch</button>
          <button
            style={dinnerActive ? {backgroundColor: "white"} : {backgroundColor: "#424749"} }
           onClick={() => setdinnerActive(!dinnerActive)} className="dinner">Dinner</button>
        </div>     

      </div>





      <div className="App">
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



      {
        (prices > 0) && (
          <div className="cart-container">
            <div className="cart">
              <div className="cart-text">
                <p className="cart-price">
                  <span>{items} Items</span>
                  <span>|</span>
                  <span>Rp {numberWithCommas(prices)}</span>
                </p>
                <p className="cart-info">termasuk ongkos kirim</p>
              </div>
              <div className="cart-icon">
                <LocalGroceryStoreOutlinedIcon />
                <ArrowForwardIosOutlinedIcon />
              </div>
            </div>
          </div>
        )
      }

    </div>
  );
}

export default App;
