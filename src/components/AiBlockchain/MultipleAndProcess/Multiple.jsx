/* eslint-disable react/prop-types */

import { TitleAi } from '../ui/TitleAi'
import { CardAiMAndP } from './CardAiMAndP'

export const Multiple = ({
	title,
	cardsTop,
	cardsBody,
	styles,
	blockchainStyle,
}) => {
	return (
		<section className={styles.aiBlockchain_section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleAi title={title} text={false} styles={styles} isCenter={true} />
				<div className={styles.m_and_p_row_top}>
					{cardsTop.map(cardAi => (
						<CardAiMAndP
							key={cardAi.id}
							title={cardAi.title}
							image={cardAi.image}
							styles={styles}
						/>
					))}
				</div>
				<div className={styles.m_and_p_row_body}>
					{cardsBody.map(cardAi => (
						<CardAiMAndP
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
