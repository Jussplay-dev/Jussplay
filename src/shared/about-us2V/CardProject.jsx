/* eslint-disable react/prop-types */
export const CardProject = ({ styles, image }) => {
	return (
		<div className={styles.about_us_project_row}>
			<div className={styles.about_us_project_item}>
				<div className={styles.about_us_project_item_ellipse}></div>
				<div className={styles.about_us_project_item_ellipse}></div>
			</div>
			<div className={styles.about_us_project_item}>
				<img src={image} alt='project image' />
			</div>
		</div>
	)
}
