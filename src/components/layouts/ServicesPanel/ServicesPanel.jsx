import './ServicesPanel.css'
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2'
import { LuDrill } from 'react-icons/lu'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { FaHandHoldingHeart } from 'react-icons/fa'
import { AiOutlineClear } from 'react-icons/ai'
import { PiGasCan } from 'react-icons/pi'
import { FaVirusCovidSlash } from 'react-icons/fa6'
import { FaBomb } from 'react-icons/fa'
import { GiDiploma } from 'react-icons/gi'
import { FaChevronRight } from 'react-icons/fa6'

export default function ServicesPanel({ active, onChange }) {
	return (
		<div className='services'>
			<div className='services__infos'>
				<h1 className='services__title'>Предлагаемые услуги</h1>
				<p className='services__info'>
					Спектр услуг по ремонту и обслуживанию кондиционеров.
				</p>
			</div>

			<div className='services__container'>
				<div className='services__cost'>
					<LuDrill className='services__icon' />
					<h1 className='services__titlecost'>Установка кондиционеров</h1>
					<p className='services__content'>
						Осуществляем монтаж кондиционеров и другого климатического
						оборудования различных видов.
					</p>
					<div className='services__buttoncont'>
						<button
							className='services__button'
							isActive={active === 'feedback'}
							onClick={() => onChange('feedback')}
						>
							Наши услуги <FaChevronRight className='services__iconb' />
						</button>
					</div>
				</div>
				<div className='services__cost'>
					<HiOutlineWrenchScrewdriver className='services__icon' />
					<h1 className='services__titlecost'>Ремонт кондиционеров</h1>
					<p className='services__content'>
						Осуществляем ремонт кондиционеров любых моделей.
					</p>
					<div className='services__buttoncont'>
						<button
							className='services__button'
							isActive={active === 'feedback'}
							onClick={() => onChange('feedback')}
						>
							Наши услуги <FaChevronRight className='services__iconb' />
						</button>
					</div>
				</div>
				<div className='services__cost'>
					<HiMagnifyingGlass className='services__icon' />
					<h1 className='services__titlecost'>Диагностика и профилактика</h1>
					<p className='services__content'>
						Диагностика неисправностей и оценка общего технического состояния
						кондиционера.
					</p>
					<div className='services__buttoncont'>
						<button
							className='services__button'
							isActive={active === 'feedback'}
							onClick={() => onChange('feedback')}
						>
							Наши услуги <FaChevronRight className='services__iconb' />
						</button>
					</div>
				</div>
				<div className='services__cost'>
					<FaHandHoldingHeart className='services__icon' />
					<h1 className='services__titlecost'>Сервисное обслуживание</h1>
					<p className='services__content'>
						Компания осуществляет обслуживание кондиционеров и другого
						климатического оборудования как единовременно, так и в рамках
						постоянного договора по обслуживанию.
					</p>
					<div className='services__buttoncont'>
						<button
							className='services__button'
							isActive={active === 'feedback'}
							onClick={() => onChange('feedback')}
						>
							Наши услуги <FaChevronRight className='services__iconb' />
						</button>
					</div>
				</div>
				<div className='services__cost'>
					<AiOutlineClear className='services__icon' />
					<h1 className='services__titlecost'>Чистка кондиционеров</h1>
					<p className='services__content'>
						Чистка кондиционеров с выездом на место - на дом, в офис и т.д.
					</p>
					<div className='services__buttoncont'>
						<button
							className='services__button'
							isActive={active === 'feedback'}
							onClick={() => onChange('feedback')}
						>
							Наши услуги <FaChevronRight className='services__iconb' />
						</button>
					</div>
				</div>
				<div className='services__cost'>
					<PiGasCan className='services__icon' />
					<h1 className='services__titlecost'>Заправка кондиционеров</h1>
					<p className='services__content'>
						Компания осуществляет заправку кондиционеров фреоном
					</p>
					<div className='services__buttoncont'>
						<button
							className='services__button'
							isActive={active === 'feedback'}
							onClick={() => onChange('feedback')}
						>
							Наши услуги <FaChevronRight className='services__iconb' />
						</button>
					</div>
				</div>
				<div className='services__cost'>
					<FaVirusCovidSlash className='services__icon' />
					<h1 className='services__titlecost'>Дезинфекция кондиционеров</h1>
					<p className='services__content'>
						Компания осуществляет профилактическую, текущую и заключительную
						дезинфекцию в рамках услуг по ремонту и обслуживанию.
					</p>
					<div className='services__buttoncont'>
						<div className='services__buttoncont'>
							<button
								className='services__button'
								isActive={active === 'feedback'}
								onClick={() => onChange('feedback')}
							>
								Наши услуги <FaChevronRight className='services__iconb' />
							</button>
						</div>
					</div>
				</div>
				<div className='services__cost'>
					<FaBomb className='services__icon' />
					<h1 className='services__titlecost'>Демонтаж кондиционеров</h1>
					<p className='services__content'>
						Высококвалифицированные специалисты компании проведут демонтаж
						внутреннего и наружного блока, с сохранением фреона.
					</p>
					<div className='services__buttoncont'>
						<button
							className='services__button'
							isActive={active === 'feedback'}
							onClick={() => onChange('feedback')}
						>
							Наши услуги <FaChevronRight className='services__iconb' />
						</button>
					</div>
				</div>
				<div className='services__cost'>
					<GiDiploma className='services__icon' />
					<h1 className='services__titlecost'>Юридическим лицам</h1>
					<p className='services__content'>
						Компания предлагает весь представленный спектр услуг как небольшим
						компаниям, так и крупным компаниям и предприятиям на выгодных
						условиях.
					</p>
					<div className='services__buttoncont'>
						<button
							className='services__button'
							isActive={active === 'feedback'}
							onClick={() => onChange('feedback')}
						>
							Наши услуги <FaChevronRight className='services__iconb' />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
