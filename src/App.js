import './App.css';
import menu from './assets/menu1.jpg';

const dates = [
  {id:1, date:10, day:"sen"},
  {id:2, date:11, day:"sel"},
  {id:3, date:12, day:"rab"},
  {id:4, date:13, day:"kam"},
  {id:5, date:14, day:"jum"},
  {id:6, date:15, day:"sab"},
  {id:7, date:16, day:"min"},
  {id:8, date:17, day:"sen"},
]

function App() {
  return (
    <div>

      
      <div className="location">
        <a className="back-button" href="/#">	&#8592;</a>
        <button className="location-button">
          <p>ALAMAT PENGANTARAN</p>
          <h4>Tokopedia Tower <span>&#8595;</span></h4>
        </button>
      </div>


      <div className="date-container">
        <div className="date">
          <p className="day">SEN</p>
          <p className="date-number">10</p>
        </div>
        <div className="date">
          <p className="day">SEN</p>
          <p className="date-number">10</p>
        </div>
        <div className="date">
          <p className="day">SEN</p>
          <p className="date-number">10</p>
        </div>
        <div className="date">
          <p className="day">SEN</p>
          <p className="date-number">10</p>
        </div>
        <div className="date">
          <p className="day">SEN</p>
          <p className="date-number">10</p>
        </div>
        <div className="date">
          <p className="day">SEN</p>
          <p className="date-number">10</p>
        </div>
        <div className="date">
          <p className="day">SEN</p>
          <p className="date-number">10</p>
        </div>
      </div>




      <div className="having-time">
        <button className="lunch btn-active">Lunch</button>
        <button className="dinner">Dinner</button>
      </div>


      


      <div className="App">
        <h1 className="card-text-title">Kamis, 13 Maret 2019</h1>
        <div className="card">
          <img src={menu} alt="Avatar" />
          <div className="card-text">
            <p className="card-text-subtext">4.5</p>
            <h3 className="card-text-title">Roasted Chicken With Scrambled Egg</h3>
            <p className="card-text-subtext">by kulina Uptown Lunch</p>
            <div className="price">
              <p>Rp 35,000</p>
              <button className="add-button">Add +</button>
            </div> 
          </div>
        </div>
        <div className="card">
          <img src={menu} alt="Avatar" />
          <div className="card-text">
            <p className="card-text-subtext">4.5</p>
            <h3 className="card-text-title">Roasted Chicken With Scrambled Egg</h3>
            <p className="card-text-subtext">by kulina Uptown Lunch</p>
            <div className="price">
              <p>Rp 35,000</p>
              <button className="add-button">Add +</button>
            </div> 
          </div>
        </div>
      </div>




      <div className="cart-container">
        <div className="cart">
          <div className="cart-text">
            <p className="cart-price">
              <span>5 Items</span>
              <span>|</span>
              <span>Rp 125,000</span>
            </p>
            <p className="cart-info">termasuk ongkos kirim</p>
          </div>
          <div className="cart-icon">
            <p>tes</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
