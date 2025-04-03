/* eslint-disable react/prop-types */

import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { CardAiMAndP } from './CardAiMAndP'

export const Process = ({
	title,
	text,
	image,
	cardsTop,
	cardsBody,
	styles,
	blockchainStyle,
}) => {
	return (
		<section className={styles.aiBlockchain_section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain title={title} subTitle={text} />
				<div className={styles.process_row_top}>
					{cardsTop.map(cardAi => (
						<CardAiMAndP
							key={cardAi.id}
							title={cardAi.title}
							image={cardAi.image}
							styles={styles}
						/>
					))}
				</div>
				<div className={styles.process_image}>
					<img src={image} alt={title} />
				</div>
				<div className={styles.process_row_body}>
					{cardsBody.map(cardAi => (
						<div key={cardAi.id} className={styles.card_ai_process}>
							<img src={cardAi.image} alt={cardAi.title} />
							<h1>{cardAi.title}</h1>
							<ul className={styles.card_ai_process_list}>
								<li>{cardAi.list1}</li>
								<li>{cardAi.list2}</li>
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
