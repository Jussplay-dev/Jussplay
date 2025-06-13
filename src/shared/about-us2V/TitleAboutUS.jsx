/* eslint-disable react/prop-types */
export const TitleAboutUS = ({ title, styles }) => {
	return (
		<h1 className={styles.about_us_title}>
			{title ? title : 'Title about-us'}
		</h1>
	)
}
