/* eslint-disable react/prop-types */
import { MediaContent } from '../../widgets/home/Cube/MediaContent'
import { IconArrowRight } from '../ui/Icons'
import { Container } from '../ui/WrapperContainer'

export const ContactUsBody = ({ styles }) => {
	return (
		<section className={styles.contact_us_section_body}>
			<Container>
				<div className={styles.contact_us_body_row}>
					<div className={styles.contact_us_body_item}>
						<h2>mergenbtye@gmail.com</h2>
						<h3>Ashgabat, Berkarar business center 2 flor</h3>
						<h4>+993 64626088</h4>
						<MediaContent styles={styles} />
					</div>
					<div className={styles.contact_us_body_item}>
						<button>
							<span>Fill out the brief</span>
							<IconArrowRight />
						</button>
					</div>
				</div>
			</Container>
		</section>
	)
}
