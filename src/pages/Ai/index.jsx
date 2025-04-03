import DomainExpertise from '../../components/Ai/DomainExpertise'
import IndustryAi from '../../components/Ai/IndustryAi'
import ServiceSection from '../../components/Ai/ServiceSection'

import bg from '../../assets/oval.png'
import { CustomScroll } from '../../components/scroll/CustomScroll'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { HeaderServicePages } from '../../components/commonService/HeaderServicePages'

import transition from '../../pageTransition'
import styles from './blockchain6.module.scss'

const Ai = () => {
	return (
		<CustomScroll>
			<div className={styles.appContainer}>
				<Header />
				<HeaderServicePages
					image={bg}
					title='Best AI Software Development Company'
					text='At Jussplay, we offer full-scale AI development services for start up and advanced enterprises across the globe by helping them to automate repetitive tasks or solve complex issues. Integrate our AI into your business and drive your bsuiness into next level! '
				/>
				<ServiceSection />
				<IndustryAi />
				<DomainExpertise />
				<img className={styles.bgImg} src={bg} alt='' />
				<Footer />
			</div>
		</CustomScroll>
	)
}

export default transition(Ai)
