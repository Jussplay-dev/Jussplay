/* eslint-disable react/prop-types */
export const CardRevenue = ({ title, text, image, styles }) => {
	return (
		<div className={styles.card_revenue_row}>
			<img src={image} alt={title} />
			<div className={styles.card_revenue_item}>
				<h1>{title}</h1>
				<p>{text}</p>
			</div>
		</div>
	)
}
