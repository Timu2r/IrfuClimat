import './Heder.css';
import Button from '../Button/Button.jsx';
import { FaPhone } from 'react-icons/fa6';
import Irfu from '../../img/irfuKlimat 2.0.png';

export default function Header({ scrollServices, refs }) {
  return (
    <header className="title__header">
      <img src={Irfu} alt="Irfu" className="irfulogo" onClick={() => scrollServices(refs.startRef, 'start')} />

      <button className="header__button" onClick={() => scrollServices(refs.startRef, 'start')}>
        Главное
      </button>

      <button className="header__button" onClick={() => scrollServices(refs.servicesRef, 'services')}>
        Услуги
      </button>

      <button className="header__button" onClick={() => scrollServices(refs.advantagesRef, 'advantages')}>
        Преимущества
      </button>

      <button className="header__button" onClick={() => scrollServices(refs.contactsRef, 'contacts')}>
        Контакты
      </button>

      <Button>
        <FaPhone className="icon__phone" />
        <span>+7 (993) 600-44-59</span>
      </Button>
    </header>
  );
}
