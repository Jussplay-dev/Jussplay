/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

export const CardAIHighSecurity = ({
	cardTitle,
	cardText,
	cardImage,
	styles,
}) => {
	return (
		<div className={styles.card_ai_high_security}>
			<img src={cardImage} alt={cardTitle} />
			<div className={styles.card_ai_high_security_content}>
				<h1>{cardTitle}</h1>
				<p>{cardText}</p>
			</div>
		</div>
	)
}
