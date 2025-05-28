/* eslint-disable react/prop-types */
import { IconEllipse } from '../../shared/ui/Icons'
import { Container } from '../../shared/ui/WrapperContainer'
import { IntroBody } from './IntroBody'
import { IntroTop } from './IntroTop'

export const Intro = ({
	logoLottieId,
	introAboutId,
	sectionRef,
	visible,
	styles,
}) => {
	return (
		<section className={styles.main_section}>
			<Container>
				<IntroTop styles={styles} />
				<IntroBody
					styles={styles}
					logoLottieId={logoLottieId}
					introAboutId={introAboutId}
					sectionRef={sectionRef}
					visible={visible}
				/>
			</Container>
			<IconEllipse styles={styles.intro_ellipse} />
		</section>
	)
}
