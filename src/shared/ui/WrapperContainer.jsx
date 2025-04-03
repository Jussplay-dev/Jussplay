/* eslint-disable react/prop-types */
export const WrapperContainer = ({ styles, blockchainStyle, children }) => {
	return (
		<section className={styles}>
			<div className={blockchainStyle.blockchainContainer}>{children}</div>
		</section>
	)
}
