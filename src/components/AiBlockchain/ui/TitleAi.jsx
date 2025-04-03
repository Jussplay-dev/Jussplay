/* eslint-disable react/prop-types */
export const TitleAi = ({ title, text, styles, isCenter, children }) => {
	return (
		<div
			className={
				isCenter
					? `${styles.ai_title_center} ${styles.ai_title}`
					: styles.ai_title
			}
		>
			<h1>{title}</h1>
			{text && <p>{text}</p>}
			{children}
		</div>
	)
}
