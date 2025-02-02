import './AdvantagesPanel.css'
import con1 from '../../../img/con1.jpg'
import con2 from '../../../img/con2.jpg'
import con3 from '../../../img/con3.jpg'
import con4 from '../../../img/con4.png'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

export default function AdvantagesPanel() {
	return (
		<div className='advantages'>
		<div className='advantages__line'>
			<h1 className='advantages__title'>Наши преимущества</h1>
			<ul className='advantages__list' >
				<li>
					<IoMdCheckmarkCircleOutline className='advantages__icon' />
					<div className='advantages__info' >
					<h1>ФИКСИРОВАННЫЕ ЦЕНЫ</h1>
					<p>
						Цены на все наши услуги категоризированы и представлены в нашем
						прайс-листе по запросу.
					</p>
					</div>
				</li>
				<li>
					<IoMdCheckmarkCircleOutline className='advantages__icon' />
					<div className='advantages__info' >
					<h1>БЕСПЛАТНЫЙ ВЫЕЗД</h1>
					<p>
					Мастер подъедет к Вам в течении 2-х часов по Москве.
					</p>
					</div>
				</li>
				<li>
					<IoMdCheckmarkCircleOutline className='advantages__icon' />
					<div className='advantages__info' >
					<h1>БЕСПЛАТНАЯ ДИАГНОСТИКА</h1>
					<p>
					Диагностика неисправностей климатического оборудования в рамках оказываемых услуг по ремонту или обслуживанию.
					</p>
					</div>
				</li>
			</ul>
			</div>
			<div className='advantages__dis' >
			<div className='advantages__imgcon1'>
			<img src={con1} alt="con1" className='con1' />
			</div>
			<div className='advantages__imgcon2'>
			<img src={con2} alt="con2" className='con2' />
			</div>
			<div className='advantages__imgcon3'>
			<img src={con3} alt="con3" className='con3' />
			</div>
			<div className='advantages__imgcon4'>
			<img src={con4} alt="con4" className='con4' />
			</div>
			</div>
		</div>
	)
}
