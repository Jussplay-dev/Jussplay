/* eslint-disable react/prop-types */
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { WrapperContainer } from '../../../shared/ui/WrapperContainer'
import { CardMLService } from './CardMLService'

export const MLService = ({ title, text, cards, styles, blockchainStyle }) => {
	return (
		<WrapperContainer
			styles={styles.ml_section}
			blockchainStyle={blockchainStyle}
		>
			<TitleBlockchain title={title} subTitle={text} />
			<div className={styles.ml_service_row}>
				{cards.map(({ id, title, text }) => (
					<CardMLService key={id} title={title} text={text} styles={styles} />
				))}
			</div>
		</WrapperContainer>
	)
}
