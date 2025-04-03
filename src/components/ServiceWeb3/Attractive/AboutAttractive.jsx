/* eslint-disable react/prop-types */
export const AboutAttractive = ({ styles, title, text, image }) => {
	return (
		<div className={styles.about_attractive_wrapper}>
			<div className={styles.about_attractive_items}>
				<h1>{title}</h1>
				<p>{text}</p>
			</div>
			<div className={styles.about_attractive_items}>
				<img src={image} alt={title} />
			</div>
		</div>
	)
}
