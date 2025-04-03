/* eslint-disable react/prop-types */
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { CardAIHighSecurity } from './CardAiHighSecurity'

export const HighSecurity = ({
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
				<div className={styles.high_security_row}>
					{cards.map(cardAi => (
						<CardAIHighSecurity
							key={cardAi.id}
							cardTitle={cardAi.title}
							cardText={cardAi.text}
							cardImage={cardAi.image}
							styles={styles}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
