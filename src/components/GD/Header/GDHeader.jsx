/* eslint-disable react/prop-types */
import { WrapperContainer } from '../../../shared/ui/WrapperContainer'
import { Title } from '../../Blockchain/Title'

export const GDHeader = ({ title, text, image, styles, blockchainStyle }) => {
	return (
		<WrapperContainer
			styles={styles.gd_header}
			blockchainStyle={blockchainStyle}
		>
			<div className={styles.gd_header_content}>
				<Title title={title} subTitle={text} />
			</div>
			<img src={image} alt={title} />
		</WrapperContainer>
	)
}
