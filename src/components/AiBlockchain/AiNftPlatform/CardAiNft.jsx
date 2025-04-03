/* eslint-disable react/prop-types */
export const CardAiNft = ({ title, image, styles }) => {
	return (
		<div className={styles.card_ai_nft}>
			<img src={image} alt={title} />
			<h1>{title}</h1>
		</div>
	)
}
