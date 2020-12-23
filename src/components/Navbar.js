import React,{useState, useEffect, useContext} from 'react';
import './Navbar.css';
import moment from 'moment';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Modal from '@material-ui/core/Modal';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import { DateContext } from '../contexts/DateContext';

const Navbar = () => {

  const {datePick, setDatePickHandler, dates} = useContext(DateContext) 

  const [showSearch, setShowSearch] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dinnerActive, setdinnerActive] = useState(true)
  const [showDinner, setShowDinner] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setShowDinner(scrollPos > currentScrollPos);
    setScrollPos(currentScrollPos)
  }

  const onChangeSearch = event => {
    if(event.target.value.length > 2){
      setShowSearch(true);
    }else{
      setShowSearch(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[scrollPos, showDinner])

    return (
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
    )
}

export default Navbar
