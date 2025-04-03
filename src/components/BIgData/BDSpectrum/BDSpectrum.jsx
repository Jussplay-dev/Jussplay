/* eslint-disable react/prop-types */
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { WrapperContainer } from '../../../shared/ui/WrapperContainer'

export const BDSpectrum = ({ title, text, cards, styles, blockchainStyle }) => {
	return (
		<WrapperContainer
			styles={styles.big_data_section}
			blockchainStyle={blockchainStyle}
		>
			<TitleBlockchain title={title} subTitle={text} />
			<div className={styles.big_data__spectrum_row}>
				{cards.map(({ id, title, text, image }) => (
					<div key={id} className={styles.big_data__spectrum_card}>
						<img src={image} alt={title} />
						<h1>{title}</h1>
						<p>{text}</p>
					</div>
				))}
			</div>
		</WrapperContainer>
	)
}
