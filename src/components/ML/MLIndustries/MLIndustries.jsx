/* eslint-disable react/prop-types */
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { WrapperContainer } from '../../../shared/ui/WrapperContainer'
import { CardMLIndustries } from './CardMLIndustries'

export const MLIndustries = ({
	title,
	text,
	cards,
	styles,
	blockchainStyle,
}) => {
	return (
		<WrapperContainer
			styles={styles.ml_section_industries}
			blockchainStyle={blockchainStyle}
		>
			<TitleBlockchain title={title} subTitle={text} />
			<div className={styles.ml_industries_row}>
				{cards.map(({ id, title, image }) => (
					<CardMLIndustries
						key={id}
						title={title}
						image={image}
						styles={styles}
					/>
				))}
			</div>
		</WrapperContainer>
	)
}
