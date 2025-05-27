// import { CustomScroll } from '../../../components/scroll/CustomScroll'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../../../components/Footer'
import ScrollSection from '../../../components/ScrollSection'
import transition from '../../../pageTransition'
import { WrapperPage } from '../../../shared/ui/WrapperContainer'
import { Header } from '../../Header2V/Header'
import { Intro } from './Intro'
import stylesHome from './new-home.module.scss'
import { SelectProject } from './SelectProject'
import { TrustedBy } from './TrustedBy'

gsap.registerPlugin(ScrollTrigger)

const Home2V = () => {
	return (
		// <CustomScroll>
		<WrapperPage>
			<Header />
			<main className={stylesHome.main}>
				<Intro logoLottieId={'logoLottie'} introAboutId={'introAbout'} />
				<SelectProject />
				<ScrollSection />
				<TrustedBy />
			</main>
			<Footer />
		</WrapperPage>
		// </CustomScroll>
	)
}

export default transition(Home2V)
