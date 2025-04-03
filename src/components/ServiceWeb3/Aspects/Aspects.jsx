/* eslint-disable react/prop-types */
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { WrapperContainer } from '../../../shared/ui/WrapperContainer'
import { CardAspects } from './CardAspects'

export const Aspects = ({ title, cards, styles, blockchainStyle }) => {
	return (
		<WrapperContainer
			styles={styles.service_web3_section}
			blockchainStyle={blockchainStyle}
		>
			<TitleBlockchain title={title} subTitle={false} />
			<div className={styles.aspect_row}>
				{cards.map(cardItem => (
					<CardAspects
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
