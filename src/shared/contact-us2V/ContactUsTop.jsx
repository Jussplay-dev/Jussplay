/* eslint-disable react/prop-types */
import { TitleDifferentPage } from '../ui/TitleDifferentPage'

export const ContactUsTop = ({ styles }) => {
	return (
		<section className={styles.contact_us_section}>
			<TitleDifferentPage
				title={'US'}
				style={styles.title_different_contact_us_page}
			/>
			<TitleDifferentPage
				title={'CONTACT'}
				style={styles.title_different_contact_us_scend_page}
			/>
		</section>
	)
}
