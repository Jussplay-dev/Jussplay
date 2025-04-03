/* eslint-disable react/prop-types */
export const CardAiMAndP = ({ title, image, styles }) => {
	return (
		<div className={styles.card_ai_m_and_p}>
			<img src={image} alt={title} />
			<h1>{title}</h1>
		</div>
	)
}
