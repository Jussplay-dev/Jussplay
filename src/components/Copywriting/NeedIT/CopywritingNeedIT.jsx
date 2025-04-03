/* eslint-disable react/prop-types */
import { WrapperContainer } from '../../../shared/ui/WrapperContainer'
import { TitleAi } from '../../AiBlockchain/ui/TitleAi'
import { CardCopywritingNeedIT } from './CardCopywritingNeedIT'

export const CopywritingNeedIT = ({
	title,
	cards,
	styles,
	blockchainStyle,
}) => {
	return (
		<WrapperContainer
			styles={styles.copywriting_section}
			blockchainStyle={blockchainStyle}
		>
			<TitleAi title={title} isCenter={true} styles={styles} />
			<div className={styles.copywriting_need_row}>
				{cards.map(({ id, title, text, image }) => (
					<CardCopywritingNeedIT
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
