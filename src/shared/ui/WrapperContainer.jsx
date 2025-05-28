/* eslint-disable react/prop-types */
import stylesUi from './styles.module.scss'
export const WrapperContainer = ({ styles, blockchainStyle, children }) => {
	return (
		<section className={styles}>
			<div className={blockchainStyle.blockchainContainer}>{children}</div>
		</section>
	)
}

export const WrapperPage = ({ children }) => {
	return <div className={stylesUi.page__wrapper}>{children}</div>
}

export const Container = ({ children }) => {
	return <div className={stylesUi.page__container}>{children}</div>
}
