import './App.css'
import Header from './components/Heder/Header.jsx'
import StartPanel from './components/layouts/StartPanel/StartPanel.jsx'
import GuaranteePanel from './components/layouts/GuaranteePanel/GuaranteePanel.jsx'
import ServicesPanel from './components/layouts/ServicesPanel/ServicesPanel.jsx'
import AdvantagePanel from './components/layouts/AdvantagesPanel/AdvantagesPanel.jsx'
import MapPanel from './components/layouts/MapPanel/MapPanel.jsx'
import FooterPanel from './components/layouts/FooterPanel/FooterPanel.jsx'
import PricePanel from './components/layouts/PricePanel/PricePanel.jsx'
import { useRef, useState } from 'react'

export default function App() {
	const startRef = useRef(null)
	const servicesRef = useRef(null)
	const advantagesRef = useRef(null)
	const contactsRef = useRef(null)

	const offsets = {
		start: -160,
		services: -70,
		advantages: -70,
		contacts: -195,
	}

	const handleScroll = (ref, panel) => {
		if (ref && ref.current) {
			const yOffset = offsets[panel] || 0
			const yPosition =
				ref.current.getBoundingClientRect().top + window.scrollY + yOffset
			window.scrollTo({ top: yPosition, behavior: 'smooth' })
		}
	}

	const [tab, setTab] = useState('start')

	return (
		<>
			{tab === 'feedback' && <PricePanel active={tab} onChange={setTab} />}
			{tab === 'start' && (
				<>
					<Header
						scrollServices={(ref, panel) => handleScroll(ref, panel)}
						refs={{ startRef, servicesRef, advantagesRef, contactsRef }}
					/>
					<div ref={startRef}>
						<StartPanel
							scrollServices={(ref, panel) => handleScroll(ref, panel)}
							refs={{ startRef, servicesRef, advantagesRef, contactsRef }}
							active={tab} onChange={setTab}
						/>
					</div>
					<GuaranteePanel />
					<div ref={servicesRef}>
						<ServicesPanel active={tab} onChange={setTab} />
					</div>
					<div ref={advantagesRef}>
						<AdvantagePanel />
					</div>
					<div ref={contactsRef}>
						<MapPanel />
					</div>
					<FooterPanel
						scrollServices={(ref, panel) => handleScroll(ref, panel)}
						refs={{ startRef, servicesRef, advantagesRef, contactsRef }}
					/>
				</>
			)}
		</>
	)
}
