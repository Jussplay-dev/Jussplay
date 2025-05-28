/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
// import { CustomScroll } from '../../../components/scroll/CustomScroll'
import { useEffect, useRef, useState } from 'react'
import Footer from '../../../components/Footer'
import ScrollSection from '../../../components/ScrollSection'
import transition from '../../../pageTransition'
import { WrapperPage } from '../../../shared/ui/WrapperContainer'
import { Header } from '../../Header2V/Header'
import { Intro } from './Intro'
import stylesHome from './new-home.module.scss'
import { SelectProject } from './SelectProject'
import { TrustedBy } from './TrustedBy'

const Home2V = () => {
	const introBodySectionRef = useRef(null)
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setVisible(true)
					} else {
						setVisible(false)
					}
				})
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0.5,
			}
		)

		if (introBodySectionRef.current) {
			observer.observe(introBodySectionRef.current)
		}

		return () => {
			if (introBodySectionRef.current) {
				observer.unobserve(introBodySectionRef.current)
			}
		}
	}, [])

	return (
		// <CustomScroll>
		<WrapperPage>
			<Header />
			<main className={stylesHome.main}>
				<Intro
					logoLottieId={'logoLottie'}
					introAboutId={'introAbout'}
					sectionRef={introBodySectionRef}
					visible={visible}
					styles={stylesHome}
				/>
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
