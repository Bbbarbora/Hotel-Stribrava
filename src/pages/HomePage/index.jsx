import './style.css';
import { Header } from '../../components/header/header';
import { Rooms } from '../../components/Rooms/rooms';


export const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Rooms />
        <p>
          Startovací šablona pro webovou aplikaci v Reactu. Vytvořeno pomocí
          {" "}
          <a href="https://www.npmjs.com/package/create-czechitas-app">create-czechitas-app</a>
          .
        </p>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};
