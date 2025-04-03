/* eslint-disable react/prop-types */

export const CardMLService = ({ title, text, styles }) => {
	return (
		<div className={styles.ml_service_card}>
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	)
}
