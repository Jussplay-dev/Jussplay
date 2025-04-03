/* eslint-disable react/prop-types */
import { useState } from 'react'
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { CardAiTrading } from './CardAiTrading'

export const TradingFeatures = ({
	title,
	text,
	cards,
	image,
	styles,
	blockchainStyle,
}) => {
	const [activeCardId, setActiveCardId] = useState(null)

	const handleCardClick = index => {
		setActiveCardId(index === activeCardId ? null : index)
	}

	return (
		<section className={styles.aiBlockchain_section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain title={title} subTitle={text} />
				<div className={styles.trading_feature_row}>
					<div className={styles.trading_feature_image}>
						<img src={image} alt={title} />
					</div>
					<div className={styles.trading_feature_wrapper_cards}>
						{cards.map((cardAi, index) => (
							<CardAiTrading
								key={cardAi.id}
								title={cardAi.title}
								text={cardAi.text}
								icon={cardAi.iconArrow}
								isActive={activeCardId === index}
								onClick={() => handleCardClick(index)}
								styles={styles}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
