import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { CardTypes } from './CardTypes'

/* eslint-disable react/prop-types */
export const TypesDevice = ({ title, cards, styles, blockchainStyle }) => {
	return (
		<section className={styles.service_web3_section}>
			<div className={blockchainStyle.blockchainContainer}>
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
			</div>
			<div className={styles.service_web3_circle} alt='bgImage' />
		</section>
	)
}
