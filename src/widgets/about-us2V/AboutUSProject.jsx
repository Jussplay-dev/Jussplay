/* eslint-disable react/prop-types */
import { CardProject } from '../../shared/about-us2V/CardProject'
import { TitleAboutUS } from '../../shared/about-us2V/TitleAboutUS'
import { Container } from '../../shared/ui/WrapperContainer'

export const AboutUSProject = ({ styles, data }) => {
	return (
		<section className={styles.about_us_project}>
			<Container>
				<div className={styles.about_us_project_title}>
					<TitleAboutUS styles={styles} title={'Project'} />
				</div>
				{data.map(projectItem => (
					<CardProject
						key={projectItem.id}
						image={projectItem.image}
						styles={styles}
					/>
				))}
			</Container>
		</section>
	)
}
