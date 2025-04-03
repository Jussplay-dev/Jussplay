/* eslint-disable react/prop-types */
import styles from './styles.module.scss'

export const SectionRow = ({ children, image }) => {
	return (
		<section className={styles.section_row}>
			<div className={styles.section_body_row}>
				<div className={styles.section_body_items}>{children}</div>
				<div className={styles.section_body_items}>
					<img src={image} alt='image' />
				</div>
			</div>
		</section>
	)
}
