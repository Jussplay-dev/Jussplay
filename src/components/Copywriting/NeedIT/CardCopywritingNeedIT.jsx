/* eslint-disable react/prop-types */
export const CardCopywritingNeedIT = ({ title, text, image, styles }) => {
	return (
		<div className={styles.copywriting_need_card}>
			<img src={image} alt={title} />
			<div className={styles.copywriting_need_content}>
				<h1>{title}</h1>
				<p>{text}</p>
			</div>
		</div>
	)
}
