/* eslint-disable react/prop-types */
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { WrapperContainer } from '../../../shared/ui/WrapperContainer'
import { ProcessFlowList } from '../../Chatbot/ProcessFlow/ProcessFlowList'

export const BDProcess = ({ title, text, image, styles, blockchainStyle }) => {
	return (
		<WrapperContainer
			styles={styles.big_data_section}
			blockchainStyle={blockchainStyle}
		>
			<TitleBlockchain title={title} subTitle={text} />
			<div className={styles.processFlow_row}>
				<div className={styles.processFlow_asset}>
					<img src={image} alt={title} />
				</div>
				<ProcessFlowList styles={styles} />
			</div>
		</WrapperContainer>
	)
}
