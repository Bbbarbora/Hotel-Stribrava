import './style.css';
import { Header } from '../../components/header/header';
import { Rooms } from '../../components/Rooms/rooms';
import {DetailFormular} from '../../components/DetailFormular/detailformular';
import {Footer} from '../../components/footer/footer';
import { BookingForm } from '../../components/formular/formular';


export const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Rooms />
        <DetailFormular />
        <BookingForm />
        <Footer />
      </main>
    
    </div>
  );
};
