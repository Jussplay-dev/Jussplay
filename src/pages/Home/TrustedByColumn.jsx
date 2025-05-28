/* eslint-disable react/prop-types */

export const TrustedByColumn = ({ style, image, isFirst, isLast }) => {
	const columnClasses = [style]

	if (isFirst) {
		columnClasses.push(style + '_item_first')
	}

	if (isLast) {
		columnClasses.push(style + '_item_last')
	}
	return (
		<div className={columnClasses.join(' ')}>
			<img src={image} alt='trusted by' />
		</div>
	)
}
