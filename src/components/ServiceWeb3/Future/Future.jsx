/* eslint-disable react/prop-types */
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { WrapperContainer } from '../../../shared/ui/WrapperContainer'
import { CardTypes } from '../TypesDevice/CardTypes'

export const Future = ({ title, cards, styles, blockchainStyle }) => {
	return (
		<WrapperContainer
			styles={styles.service_web3_section}
			blockchainStyle={blockchainStyle}
		>
			<TitleBlockchain title={title} subTitle={false} />
			<div className={styles.service_web3_row}>
				{cards.map(cardItem => (
					<CardTypes
						key={cardItem.id}
						title={cardItem.title}
						text={cardItem.text}
						image={cardItem.image}
						styles={styles}
					/>
				))}
			</div>
		</WrapperContainer>
	)
}
