/* eslint-disable react/prop-types */
export const CardAiTrading = ({
	title,
	text,
	icon,
	onClick,
	isActive,
	styles,
}) => {
	return (
		<div className={styles.card_ai_trading_wrapper} onClick={onClick}>
			<div className={styles.card_ai_trading_row}>
				<h1>{title}</h1>
				<img src={icon} alt={title} />
			</div>
			{isActive && (
				<div className={styles.card_ai_trading_active_text}>
					<p>{text}</p>
				</div>
			)}
		</div>
	)
}
