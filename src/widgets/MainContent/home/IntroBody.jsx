/* eslint-disable react/prop-types */
import LogoLottie from '../../../components/Lottie/Lottie'

export const IntroBody = ({ styles, logoLottieId, introAboutId }) => {
	return (
		<div className={styles.intro_body} id={logoLottieId}>
			<LogoLottie />
			<div className={styles.intro_body_text} id={introAboutId}>
				<p>
					Join <span>JussPlay,</span>
				</p>
				<p>
					and see your project <span>JUST</span> come to life.
				</p>
				<p>
					<span>SAY</span> what you want: web, mobile, design, or
				</p>
				<p>
					other services, and we will <span>IT</span> happen.
				</p>
				<p>Our team of experts are here, and</p>
				<p>
					<span>WE</span> manage every project professionally.
				</p>
				<p>
					Our principal is to <span>MAKE</span> your vision a reality.
				</p>
				<p>Trust us with your ideas,</p>
				<p>
					and we will complete <span>IT</span> to perfection.
				</p>
			</div>
		</div>
	)
}
