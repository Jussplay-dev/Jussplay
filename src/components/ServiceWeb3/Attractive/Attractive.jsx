/* eslint-disable react/prop-types */
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { WrapperContainer } from '../../../shared/ui/WrapperContainer'
import { AboutAttractive } from './AboutAttractive'

export const Attractive = ({ title, cards, text, styles, blockchainStyle }) => {
	return (
		<WrapperContainer
			styles={styles.service_web3_section}
			blockchainStyle={blockchainStyle}
		>
			<TitleBlockchain title={title} subTitle={text} />
			<div className={styles.about_attractive_body}>
				{cards.map(({ id, title, text, image }) => (
					<AboutAttractive
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
