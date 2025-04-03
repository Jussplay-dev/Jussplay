/* eslint-disable react/prop-types */
export const CardAspects = ({ title, text, image, styles }) => {
	return (
		<div className={styles.card_aspect}>
			<img src={image} alt={title} />
			<div className={styles.card_aspect_items}>
				<h1>{title}</h1>
				<p>{text}</p>
			</div>
		</div>
	)
}
