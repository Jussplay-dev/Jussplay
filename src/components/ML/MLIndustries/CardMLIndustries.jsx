/* eslint-disable react/prop-types */
export const CardMLIndustries = ({ title, image, styles }) => {
	return (
		<div className={styles.ml_card_industries}>
			<img src={image} alt={title} />
			<h1>{title}</h1>
		</div>
	)
}
