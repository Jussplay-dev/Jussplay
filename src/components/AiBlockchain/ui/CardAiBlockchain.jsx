/* eslint-disable react/prop-types */
export const CardAiBlockchain = ({ title, text, image, styles }) => {
	return (
		<div className={styles.aiBlockchain_card}>
			<img src={image} alt={title} />
			<h2>{title}</h2>
			<p>{text}</p>
		</div>
	)
}
