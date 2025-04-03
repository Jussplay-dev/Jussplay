/* eslint-disable react/prop-types */
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { WrapperContainer } from '../../../shared/ui/WrapperContainer'
import { CardServiceWeb3 } from '../ui/CardServiceWeb3'

export const Popular = ({ title, cards, styles, blockchainStyle }) => {
	return (
		<WrapperContainer
			styles={styles.service_web3_section}
			blockchainStyle={blockchainStyle}
		>
			<TitleBlockchain title={title} subTitle={false} />
			<div className={styles.popular_row}>
				{cards.map(({ id, title, image }) => (
					<CardServiceWeb3
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
