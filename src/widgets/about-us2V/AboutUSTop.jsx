/* eslint-disable react/prop-types */
import { TitleDifferentPage } from '../../shared/ui/TitleDifferentPage'
import { Container } from '../../shared/ui/WrapperContainer'

export const AboutUSTop = ({ styles }) => {
	return (
		<section className={styles.service_section_about}>
			<TitleDifferentPage
				title={'US'}
				style={styles.title_different_about_us_page}
			/>
			<TitleDifferentPage
				title={'ABOUT'}
				style={styles.title_different_about_us_scend_page}
			/>
			<Container>
				<div className={styles.service_wrapper_min_ellipse}>
					<div className={styles.about_us_subtitle}>
						{/* H2 set props children */}
						<h2>Product approach</h2>
						<h3>
							Technology partners with industry expertise, not just contractors.
						</h3>
					</div>
					<div className={styles.about_us_min_ellipse}></div>
					<div className={styles.about_us_achievement_row}>
						<div className={styles.about_us_achievement_item}>
							<h3>90</h3>
							<h4>Клиентов работают с нами более 3-х лет</h4>
						</div>
						<div className={styles.about_us_achievement_item}>
							<h3>10</h3>
							<h4>years on the digital services market</h4>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
