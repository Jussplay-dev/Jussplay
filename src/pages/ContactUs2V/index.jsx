import { CustomScroll } from '../../components/scroll/CustomScroll'
import transition from '../../pageTransition'
import { ContactUsBody } from '../../shared/contact-us2V/ContactUsBody'
import { ContactUsTop } from '../../shared/contact-us2V/ContactUsTop'
import { IconEllipse } from '../../shared/ui/Icons'
import { MainContent } from '../../shared/ui/MainContent'
import { WrapperPage } from '../../shared/ui/WrapperContainer'
import { Header } from '../../widgets/Header2V/Header'
import stylesEllipse from '../Service2V/service2V.module.scss'
import styles from './contact-us.module.scss'

const ContactUS = () => {
	return (
		<CustomScroll>
			<WrapperPage>
				<Header />
				<MainContent styles={styles.main_contact_us}>
					<ContactUsTop styles={styles} />
					<ContactUsBody styles={styles} />
				</MainContent>
				<IconEllipse styles={stylesEllipse.service_ellipse} />
			</WrapperPage>
		</CustomScroll>
	)
}

export default transition(ContactUS)
