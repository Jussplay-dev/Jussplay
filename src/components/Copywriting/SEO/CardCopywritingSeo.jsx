/* eslint-disable react/prop-types */
export const CardCopywritingSeo = ({ title, text, image, styles }) => {
	return (
		<div className={styles.copywriting_seo_card}>
			<img src={image} alt={title} />
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	)
}
