/* eslint-disable react/prop-types */
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { WrapperContainer } from '../../../shared/ui/WrapperContainer'

export const MLTable = ({ title, text, cards, styles, blockchainStyle }) => {
	return (
		<WrapperContainer
			styles={styles.ml_section}
			blockchainStyle={blockchainStyle}
		>
			<TitleBlockchain title={title} subTitle={text} />
			<div className={styles.ml_table_row}>
				{cards.map(({ id, title, image }) => (
					<div key={id} className={styles.ml_table_card}>
						<img src={image} alt={title} />
						<h1>{title}</h1>
					</div>
				))}
			</div>
		</WrapperContainer>
	)
}
