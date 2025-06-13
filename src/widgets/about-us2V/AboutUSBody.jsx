/* eslint-disable react/prop-types */
import { aboutUsPersonalsData } from '../../db/About-us/about-us.db'
import { CardAboutUS } from '../../shared/about-us2V/CardAboutUS'
import { Container } from '../../shared/ui/WrapperContainer'

export const AboutUSBody = ({ styles }) => {
	return (
		<section className={styles.about_us_body}>
			<Container>
				<div className={styles.about_us_body_row}>
					{aboutUsPersonalsData.map(aboutUsItem => (
						<CardAboutUS
							key={aboutUsItem.id}
							title={aboutUsItem.title}
							text={aboutUsItem.text}
							image={aboutUsItem.image}
							styles={styles}
						/>
					))}
				</div>
			</Container>
		</section>
	)
}
