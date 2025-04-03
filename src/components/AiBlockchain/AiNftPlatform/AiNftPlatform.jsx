/* eslint-disable react/prop-types */

import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { CardAiNft } from './CardAiNft'

export const AiNftPlatform = ({
	title,
	text,
	cards,
	styles,
	blockchainStyle,
}) => {
	return (
		<section className={styles.aiBlockchain_section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain title={title} subTitle={text} />
				<div className={styles.aiBlockchain_row}>
					{cards.map(cardAi => (
						<CardAiNft
							key={cardAi.id}
							title={cardAi.title}
							image={cardAi.image}
							styles={styles}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
