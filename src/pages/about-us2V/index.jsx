import Footer from '../../components/Footer'
import { CustomScroll } from '../../components/scroll/CustomScroll'
import { aboutUSProjectData } from '../../db/About-us/about-us.db'
import transition from '../../pageTransition'
import { IconEllipse } from '../../shared/ui/Icons'
import { MainContent } from '../../shared/ui/MainContent'
import { WrapperPage } from '../../shared/ui/WrapperContainer'
import { AboutUSApproach } from '../../widgets/about-us2V/AboutUSApproach'
import { AboutUSBody } from '../../widgets/about-us2V/AboutUSBody'
import { AboutUSProject } from '../../widgets/about-us2V/AboutUSProject'
import { AboutUSTop } from '../../widgets/about-us2V/AboutUSTop'
import { Header } from '../../widgets/Header2V/Header'
import stylesService from '../Service2V/service2V.module.scss'
import styles from './about-us2V.module.scss'

const AboutUS = () => {
	return (
		<CustomScroll>
			<WrapperPage>
				<Header />
				<MainContent styles={styles.main_about_us}>
					<AboutUSTop styles={styles} />
					<AboutUSBody styles={styles} />
					<AboutUSApproach styles={styles} />
					<AboutUSProject styles={styles} data={aboutUSProjectData} />
				</MainContent>
				<Footer />
				<IconEllipse styles={stylesService.service_ellipse} />
			</WrapperPage>
		</CustomScroll>
	)
}

export default transition(AboutUS)
