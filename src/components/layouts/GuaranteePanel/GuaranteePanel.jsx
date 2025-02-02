import './GuaranteePanel.css'
import Daiki from '../../../img/daikin.png'

export default function GuaranteePanel() {
	return (
		<div className='guarantee'>
			<div className='guarantee__img'>
				<img src={Daiki} alt='daikin' className='guarantee__imgdaikin' />
				<span className='guarantee__companiya' ><span>Daikin</span> Японская компания</span>
			</div>
			<div className='guarantee__info'>
				<h1 className='guarantee__title'>Гарантия Качество Оперативность</h1>
				<p className='guarantee__text'>
					Квалифицированные мастера и бригады компании с локацией по всем
					субъектам Москвы и Московской области, оперативно реагируют на
					поступающие заявки.
				</p>
				<p className='guarantee__text'>
					Выезд на место в течении 2-х часов с момента принятия завки.
				</p>
				<p className='guarantee__textya'>
					“Японская компания, мировой лидер в производстве бытовых и
					промышленных кондиционеров воздуха, систем отопления и вентиляции
					помещений. ”
				</p>
			</div>
		</div>
	)
}
