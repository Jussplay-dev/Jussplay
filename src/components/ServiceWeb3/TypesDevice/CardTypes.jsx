/* eslint-disable react/prop-types */
export const CardTypes = ({ styles, title, text, image }) => {
	return (
		<div className={styles.service_web3_card}>
			<img src={image} alt={title} />
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	)
}
