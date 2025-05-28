/* eslint-disable react/prop-types */
import { IconArrowIntro } from '../../../shared/ui/Icons'
import { MainTitle } from './MainTitle'

export const IntroTop = ({ styles }) => {
	return (
		<div className={styles.intro_top}>
			<MainTitle title={'JUST SAY IT'} />
			<div className={styles.intro_top_slogan}>
				<div className={styles.intro_top_slogan_text}>
					<p>
						Our team of experts is here to make it happen. Let’s build something
						amazing together!
					</p>
				</div>
				<MainTitle title={'we will make it'} />
			</div>
			<button className={styles.intro_top_button}>
				<span>Create a project</span>
				<IconArrowIntro sizeBox={32} />
			</button>
		</div>
	)
}
