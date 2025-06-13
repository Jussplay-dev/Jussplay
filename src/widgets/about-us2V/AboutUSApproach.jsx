/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { aboutUSApproachListData } from '../../db/About-us/about-us.db'
import { DetailsListAboutUS } from '../../shared/about-us2V/DetailsListAboutUS'
import { TitleAboutUS } from '../../shared/about-us2V/TitleAboutUS'
import { Container } from '../../shared/ui/WrapperContainer'

export const AboutUSApproach = ({ styles }) => {
	return (
		<section className={styles.about_us_approach}>
			<Container>
				<div className={styles.about_us_approach_row}>
					<div className={styles.about_us_approach_item}>
						<TitleAboutUS title={'Our approach'} styles={styles} />
					</div>
					<div className={styles.about_us_approach_item_details}>
						<h2>
							We focus on the client's business goals. We generate hypotheses
							for business growth through an IT solution.
						</h2>
						{aboutUSApproachListData.map(aboutUSApproach => (
							<DetailsListAboutUS
								key={aboutUSApproach.id}
								title={aboutUSApproach.title}
								titleNumber={aboutUSApproach.titleNumber}
								styles={styles}
							/>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}
