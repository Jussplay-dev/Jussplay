/* eslint-disable react/prop-types */

export const CardServiceWeb3 = ({ styles, title, image }) => {
	return (
		<div className={styles.card_service_ui_web3}>
			<img src={image} alt={title} />
			<h1>{title}</h1>
		</div>
	)
}
