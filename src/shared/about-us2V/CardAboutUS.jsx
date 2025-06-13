/* eslint-disable react/prop-types */
export const CardAboutUS = ({ image, title, text, styles }) => {
	return (
		<div className={styles.about_us_body_card}>
			<img src={image} alt={image ? title : 'Personal image'} />
			<h1>{title ? title : 'Personal names'}</h1>
			<p>{text ? text : 'About personal'}</p>
		</div>
	)
}
