/* eslint-disable react/prop-types */

import { TitleAi } from '../../AiBlockchain/ui/TitleAi'
import { CardEngines } from './CardEngines'

export const Engines = ({ title, text, cards, styles, blockchainStyle }) => {
	return (
		<section className={styles.service_web3_section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleAi title={title} text={text} isCenter={false} styles={styles} />
				<div className={styles.engines_row}>
					{cards.map(({ id, title, text, image }) => (
						<CardEngines
							key={id}
							title={title}
							text={text}
							image={image}
							styles={styles}
						/>
					))}
				</div>
			</div>
			<div className={styles.service_web3_circle_right} alt='bgImage' />
		</section>
	)
}
