import './FooterPanel.css'

export default function FooterPanel({ scrollServices, refs }) {
	return (
		<div className='footer__panel'>
			<div className='sait__info'>
				<h2 className='footer__title'>Информация о сайте</h2>
				<div className='footer__buttons'>
					<button className='footer__button' onClick={() => scrollServices(refs.startRef, 'start')} >Главное</button>
					<button className='footer__button' onClick={() => scrollServices(refs.servicesRef, 'services')} >Услуги</button>
					<button className='footer__button' onClick={() => scrollServices(refs.advantagesRef, 'advantages')} >Преимущества</button>
				</div>
				<p className='footer__phone'>+7 (993) 600-44-59</p>
				<p className='footer__description'>
					Этот сайт предлагает широкий спектр услуг для вашего удобства.
				</p>
				<p className='footer__description'>
					Мы гарантируем высокое качество и индивидуальный подход к каждому
					клиенту.
				</p>
				<p className='footer__description'>
					Все данные передаются по защищенным каналам для обеспечения
					безопасности.
				</p>
				<p className='footer__description'>
					Мы соблюдаем все необходимые стандарты конфиденциальности и защиты
					информации.
				</p>
			</div>

			<div className='footer__divider'></div>

			<div className='creator__info'>
				<h2 className='footer__title'>Информация о создателе</h2>
				<p className='creator__text'>Создано в 2025 году</p>
				<p className='creator__text'>Все права защищены</p>
				<p className='creator__text'>Политика конфиденциальности</p>

				<div className='creator__line'>
					<h3 className='creator__contact-title'>Контакты</h3>
					<p className='creator__text'>
						<span>Номер телефона:</span> +7 (995) 300-44-59
					</p>
					<p className='creator__text'>
						<span>Телеграм:</span>{' '}
						<a
							href='https://t.me/Timu2r'
							target='_blank'
							rel='noopener noreferrer'
							className='creator__link'
						>
							@Timu2r
						</a>
					</p>
				</div>
			</div>
		</div>
	)
}
