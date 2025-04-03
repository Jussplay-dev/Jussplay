/* eslint-disable react/prop-types */
export const CardEngines = ({ styles, title, text, image }) => {
	return (
		<div className={styles.service_web3_card_engines}>
			<img src={image} alt={title} />
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	)
}
