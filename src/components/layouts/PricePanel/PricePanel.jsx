import { useEffect } from 'react';
import Button from '../../Button/Button';
import './PricePanel.css';
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { LuDrill } from 'react-icons/lu';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { AiOutlineClear } from 'react-icons/ai';
import { PiGasCan } from 'react-icons/pi';
import { FaVirusCovidSlash } from 'react-icons/fa6';
import { FaBomb } from 'react-icons/fa';
import { GiDiploma } from 'react-icons/gi';
import { FaChevronRight } from 'react-icons/fa6';

export default function PricePanel({ active, onChange }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="price">
      <div className="price__infos">
        <h1 className="price__title">Цены на услуги</h1>
        <Button
          className={`price__button ${active === 'start' ? 'active' : ''}`}
          onClick={() => onChange('start')}
        >
          Назад
        </Button>
        <p className="price__info">
          Наши цены на услуги всегда остаются доступными и конкурентоспособными. Стоимость может варьироваться в зависимости от сезона, поэтому именно сейчас — отличный момент, чтобы заказать установку, чистку или заправку кондиционера по выгодной цене. Поддержите комфорт в вашем доме или офисе, не переплачивая!
        </p>
      </div>

      <div className="price__container">
        <div className="price__cost">
          <LuDrill className="price__icon" />
          <h1 className="price__titlecost">Установка кондиционеров</h1>
          <p className="price__content">
            Профессиональный монтаж кондиционеров всех моделей с соблюдением технических стандартов и последующей проверкой работы системы.
          </p>
          <div className="price__costcont">
            <p className='cost__servis'><a className='whatll' href="https://api.whatsapp.com/send?phone=79936004459"><span>Цена: </span> 40000₽</a></p>
          </div>
        </div>

        <div className="price__cost">
          <HiOutlineWrenchScrewdriver className="price__icon" />
          <h1 className="price__titlecost">Ремонт кондиционеров</h1>
          <p className="price__content">
            Оперативное устранение поломок любых сложностей. Восстановление работы внутренних и внешних блоков.
          </p>
          <div className="price__costcont">
            <p className='cost__servis'><a className='whatll' href="https://api.whatsapp.com/send?phone=79936004459"><span>Цена: </span> 3000₽</a></p>
          </div>
        </div>

        <div className="price__cost">
          <HiMagnifyingGlass className="price__icon" />
          <h1 className="price__titlecost">Диагностика и профилактика</h1>
          <p className="price__content">
            Диагностика неисправностей и оценка общего технического состояния кондиционера.
          </p>
          <div className="price__costcont">
            <p className='cost__servis'><a className='whatll' href="https://api.whatsapp.com/send?phone=79936004459"><span>Цена: </span> 8000₽ за выезд</a></p>
          </div>
        </div>

        <div className="price__cost">
          <FaHandHoldingHeart className="price__icon" />
          <h1 className="price__titlecost">Сервисное обслуживание</h1>
          <p className="price__content">
            Компания осуществляет обслуживание кондиционеров и другого климатического оборудования как единовременно, так и в рамках постоянного договора по обслуживанию.
          </p>
          <div className="price__costcont">
            <p className='cost__servis'><a className='whatll' href="https://api.whatsapp.com/send?phone=79936004459"><span>Цена: </span> 20000₽</a></p>
          </div>
        </div>

        <div className="price__cost">
          <AiOutlineClear className="price__icon" />
          <h1 className="price__titlecost">Чистка кондиционеров</h1>
          <p className="price__content">
            Чистка кондиционеров с выездом на место - на дом, в офис и т.д.
          </p>
          <div className="price__costcont">
            <p className='cost__servis'><a className='whatll' href="https://api.whatsapp.com/send?phone=79936004459"><span>Цена: </span> 5000₽</a></p>
          </div>
        </div>

        <div className="price__cost">
          <PiGasCan className="price__icon" />
          <h1 className="price__titlecost">Заправка кондиционеров</h1>
          <p className="price__content">
            Компания осуществляет заправку кондиционеров фреоном.
          </p>
          <div className="price__costcont">
            <p className='cost__servis'><a className='whatll' href="https://api.whatsapp.com/send?phone=79936004459"><span>Цена: </span> 8000₽</a></p>
          </div>
        </div>

        <div className="price__cost">
          <FaBomb className="price__icon" />
          <h1 className="price__titlecost">Демонтаж кондиционеров</h1>
          <p className="price__content">
            Высококвалифицированные специалисты компании проведут демонтаж внутреннего и наружного блока, с сохранением фреона и трассы.
          </p>
          <div className="price__costcont">
            <p className='cost__servis'><a className='whatll' href="https://api.whatsapp.com/send?phone=79936004459"><span>Цена: </span> 20000₽</a></p>
          </div>
        </div>

        <div className="price__cost">
          <FaVirusCovidSlash className="price__icon" />
          <h1 className="price__titlecost">Дезинфекция кондиционеров</h1>
          <p className="price__content">
            Полная дезинфекция системы кондиционирования для предотвращения развития грибков и бактерий.
          </p>
          <div className="price__costcont">
            <p className='cost__servis'><a className='whatll' href="https://api.whatsapp.com/send?phone=79936004459"><span>Цена: </span> 5000₽</a></p>
          </div>
        </div>

        <div className="price__cost">
          <GiDiploma className="price__icon" />
          <h1 className="price__titlecost">Консультация</h1>
          <p className="price__content">
            Подбор оптимальной модели кондиционера с учётом площади помещения и ваших потребностей.
          </p>
          <div className="price__costcont">
            <p className='cost__servis'><a className='whatll' href="https://api.whatsapp.com/send?phone=79936004459"><span>Цена: </span> 5000₽</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
