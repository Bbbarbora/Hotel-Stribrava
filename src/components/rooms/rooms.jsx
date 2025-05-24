import pokoj01 from '../../pages/HomePage/img/pokoje/pokoj01.jpg';
import pokoj02 from '../../pages/HomePage/img/pokoje/pokoj02.jpg';
import pokoj03 from '../../pages/HomePage/img/pokoje/pokoj03.jpg';
import pokoj04 from '../../pages/HomePage/img/pokoje/pokoj04.jpg';
import pokoj05 from '../../pages/HomePage/img/pokoje/pokoj05.jpg';
import'./Rooms.css'

import { Room } from "../Room/Room";


const roomsData = [
  { id: 1, imageUrl: pokoj01, title: 'Ukryt', body: '450 Kč na osobu' },
  { id: 2, imageUrl: pokoj02, title: 'Základ', body: '700 Kč na osobu' },
  { id: 3, imageUrl: pokoj03, title: 'Klasik', body: '1200 Kč na osobu' },
  { id: 4, imageUrl: pokoj04, title: 'Komfort', body: '2500 Kč na osobu' },
  { id: 5, imageUrl: pokoj05, title: 'Luxus', body: '8000 Kč na osobu' },
];
export const Rooms = () => {
  return (
    <section className="dark">
      <div className="container">
        <h2>Naše izby</h2>
        <p>Vyberte si ideálnu izbu podľa svojich predstáv.</p>

        <div className="cards-row">
          {roomsData.map(({ id, imageUrl, title, body }) => (
            <Room key={id} imageUrl={imageUrl} title={title} body={body} />
          ))}
        </div>
      </div>
    </section>
  );
};