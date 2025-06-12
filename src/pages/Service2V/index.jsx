import Footer from '../../components/Footer'
import { CustomScroll } from '../../components/scroll/CustomScroll'
import transition from '../../pageTransition'
import { IconEllipse } from '../../shared/ui/Icons'
import { MainContent } from '../../shared/ui/MainContent'
import { WrapperPage } from '../../shared/ui/WrapperContainer'
import { Header } from '../../widgets/Header2V/Header'
import { ServiceAbout } from '../../widgets/service2/ServiceAbout'
import styles from './service2V.module.scss'

const Service2V = () => {
	return (
		<CustomScroll>
			<WrapperPage>
				<Header />
				<MainContent styles={styles.main_service}>
					<ServiceAbout styles={styles} />
				</MainContent>
				<Footer />
				<IconEllipse styles={styles.service_ellipse} />
			</WrapperPage>
		</CustomScroll>
	)
}

export default transition(Service2V)
