/* eslint-disable react/prop-types */
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { CardAiBlockchain } from '../ui/CardAiBlockchain'

export const PerfectionistsDelivering = ({
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
						<CardAiBlockchain
							key={cardAi.id}
							title={cardAi.title}
							text={cardAi.text}
							image={cardAi.image}
							styles={styles}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
