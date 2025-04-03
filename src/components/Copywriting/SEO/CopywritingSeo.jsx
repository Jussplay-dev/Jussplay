/* eslint-disable react/prop-types */
import { WrapperContainer } from '../../../shared/ui/WrapperContainer'
import { TitleAi } from '../../AiBlockchain/ui/TitleAi'
import { CardCopywritingSeo } from './CardCopywritingSeo'

export const CopywritingSeo = ({ title, cards, styles, blockchainStyle }) => {
	return (
		<WrapperContainer
			styles={styles.copywriting_section}
			blockchainStyle={blockchainStyle}
		>
			<TitleAi title={title} isCenter={true} styles={styles} />
			<div className={styles.copywriting_seo_row}>
				{cards.map(({ id, title, text, image }) => (
					<CardCopywritingSeo
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
