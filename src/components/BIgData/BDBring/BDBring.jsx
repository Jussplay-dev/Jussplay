/* eslint-disable react/prop-types */

import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { WrapperContainer } from '../../../shared/ui/WrapperContainer'
import { CardAIRisingMax } from '../../Chatbot/AIRisingMax/CardAIRisingMax'

export const BDBring = ({ title, text, cards, styles, blockchainStyle }) => {
	return (
		<WrapperContainer
			styles={styles.copywriting_section}
			blockchainStyle={blockchainStyle}
		>
			<TitleBlockchain title={title} subTitle={text} />
			<div className={styles.chat_bot__rising_max_row}>
				{cards.map(({ id, title, text, image }) => (
					<CardAIRisingMax
						key={id}
						title={title}
						text={text}
						image={image}
						styles={styles}
					/>
				))}
			</div>
		</WrapperContainer>
	)
}
