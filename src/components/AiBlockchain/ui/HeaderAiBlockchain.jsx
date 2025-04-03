import { BtnBlockchain } from '../../Button/Blockchain/BtnBlockchain'
import { TitleAi } from './TitleAi'

/* eslint-disable react/prop-types */
export const HeaderAiBlockchain = ({
	title,
	text,
	styles,
	stylesBlockchain,
	image,
}) => {
	return (
		<section className={styles.aiBlockchainHeader}>
			<div className={stylesBlockchain.blockchainContainer}>
				<TitleAi title={title} text={text} styles={styles} isCenter={true}>
					<BtnBlockchain />
				</TitleAi>
			</div>
			<img src={image} alt={title} />
		</section>
	)
}
