/* eslint-disable react/prop-types */
import { IconEllipse } from '../../../shared/ui/Icons'
import { Container } from '../../../shared/ui/WrapperContainer'
import { IntroBody } from './IntroBody'
import { IntroTop } from './IntroTop'
import styles from './new-home.module.scss'

export const Intro = ({ logoLottieId, introAboutId }) => {
	return (
		<section className={styles.main_section}>
			<Container>
				<IntroTop styles={styles} />
				<IntroBody
					styles={styles}
					logoLottieId={logoLottieId}
					introAboutId={introAboutId}
				/>
			</Container>
			<IconEllipse styles={styles.intro_ellipse} />
		</section>
	)
}
