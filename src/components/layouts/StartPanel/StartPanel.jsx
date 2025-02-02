import Button from '../../Button/Button.jsx'
import './StartPanel.css'
import { FaChevronRight } from 'react-icons/fa6'
import Sber from '../../../img/sber.png'
import Vkys from '../../../img/vkusvill-logo-old.png'
import Benetton from '../../../img/Benetton.png'
import Sunlight from '../../../img/sunlight.jpg'

export default function StartPanel({
	scrollServices,
	refs,
	active,
	onChange,
}) {
	return (
		<div className='start__panel'>
			<h1 className='start__title'>Срочный выездной ремонт кондиционеров</h1>
			<p className='start__text'>
				Ремонт и Обслуживание Кондиционеров В Москве
				<span className='start__span'>И Московской Области</span>
			</p>
			<div className='start__buttons'>
				<Button
					className='services__button'
					isActive={active === 'feedback'}
					onClick={() => onChange('feedback')}
				>
					Запросить Прайс
				</Button>
				<button
					className='start__button'
					onClick={() => scrollServices(refs.servicesRef, 'services')}
				>
					Наши услуги <FaChevronRight className='start__icon' />
				</button>
			</div>
			<p className='start__cooperate'>Мы сотрудничаем с:</p>
			<div className='start__img'>
				<img className='start__imgsber' src={Sber} alt='sber' />
				<img className='start__imgvkys' src={Vkys} alt='vkusvill' />
				<img className='start__imgbenetton' src={Benetton} alt='benetton' />
				<div className='start__imgsunlightdiv'>
					<img className='start__imgsunlight' src={Sunlight} alt='sunlight' />
					<span className='start__sunlight'>SUNLIGHT</span>
				</div>
			</div>
		</div>
	)
}
