/* eslint-disable react/prop-types */
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { WrapperContainer } from '../../../shared/ui/WrapperContainer'

export const MLFirm = ({ title, cards, styles, blockchainStyle }) => {
	return (
		<WrapperContainer
			styles={styles.ml_section}
			blockchainStyle={blockchainStyle}
		>
			<TitleBlockchain title={title} />
			<div className={styles.ml_firm_row}>
				{cards.map(({ id, title, text, image }) => (
					<div key={id} className={styles.ml_firm_card}>
						<img src={image} alt={title} />
						<h1>{title}</h1>
						<p>{text}</p>
					</div>
				))}
			</div>
		</WrapperContainer>
	)
}
