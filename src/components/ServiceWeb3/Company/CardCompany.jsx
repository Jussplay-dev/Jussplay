/* eslint-disable react/prop-types */

export const CardCompany = ({ title, text, styles }) => {
	return (
		<div className={styles}>
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	)
}
