import './MapPanel.css'
import ImgMap from '../../../img/Снимок экрана от 2025-02-01 23-13-59.png'

export default function MapPanel() {
	return (
		<div className='map__panel'>
			<img src={ImgMap} alt='map' className='map__img' />
			<div className='map__info'>
				<h1>Наши контакты</h1>

				<div className='conteiner__phone'>
					<span className='map__phone'>ТЕЛЕФОН / ПОЧТА</span>
					<div className='map__conphon'>
						<p>+7 (993) 600-44-59</p>
						<p>khamidovshokir662@gmail.com</p>
					</div>
				</div>

				<div className='conteiner__address'>
					<span className='map__address'>АДРЕС</span>
					<div className='map__conphon'>
						<p> Московская область, город Люберцы, улица Калараш д. 9а оф. 2</p>
					</div>
				</div>

				<div className='conteiner__whatsapp'>
					<span className='map__whatsapp'>
						НАПИСАТЬ В <span> WHATSAPP</span>
					</span>
					<div className='map__conphon'>
						<p className='whatsapp' > <a href="https://api.whatsapp.com/send?phone=79936004459">+7 (993) 600-44-59</a> </p>
					</div>
				</div>
			</div>
		</div>
	)
}
