import './Header.css';
import hotelImage from '../../pages/HomePage/img/hotel.jpg';

 export const Header = () => {
  return (
    <header className="header"  style={{ backgroundImage: `url(${hotelImage})` }}>
      <div className="overlay">
        <h1>Hotel Stříbrava</h1>
        <p>Rodinný hotel v malebné krajině Českého středohoří.</p>
      </div>
    </header>
  );
};
