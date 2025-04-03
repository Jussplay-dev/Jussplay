/* eslint-disable react/prop-types */

import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { WrapperContainer } from '../../../shared/ui/WrapperContainer'
export const Reality = ({ title, list, styles, blockchainStyle, bgImage }) => {
	return (
		<WrapperContainer
			styles={styles.service_web3_section}
			blockchainStyle={blockchainStyle}
		>
			<TitleBlockchain title={title} subTitle={false} />
			<div className={styles.reality_row}>
				<div className={styles.reality_item}>
					<img src={bgImage} alt={title} />
				</div>
				<div className={styles.reality_item}>
					<ul>
						{list.map(({ id, title }) => (
							<li key={id}>
								<span>{id}</span>
								{title}
							</li>
						))}
					</ul>
				</div>
				<ul></ul>
			</div>
		</WrapperContainer>
	)
}
