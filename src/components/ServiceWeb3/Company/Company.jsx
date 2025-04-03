/* eslint-disable react/prop-types */
import {
	imageBgCompany01,
	imageBgCompany02,
} from '../../../db/service-web3/service-web3.data'
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { WrapperContainer } from '../../../shared/ui/WrapperContainer'
import { CardCompany } from './CardCompany'

export const Company = ({ title, text, cards, styles, blockchainStyle }) => {
	const { company1, company2, company3, company4 } = cards
	return (
		<WrapperContainer styles={styles} blockchainStyle={blockchainStyle}>
			<TitleBlockchain title={title} subTitle={text} />
			<div className={styles.company_row}>
				<div className={styles.company_body}>
					<img src={imageBgCompany01} alt='bg' />
					<div className={styles.company_body_row}>
						<CardCompany
							title={company1.title}
							text={company1.text}
							styles={styles.company_card_content_left}
						/>
						<CardCompany
							title={company2.title}
							text={company2.text}
							styles={styles.company_card_content_left}
						/>
					</div>
				</div>
				<div className={styles.company_body}>
					<img src={imageBgCompany02} alt='bg' />
					<div className={styles.company_body_row}>
						<CardCompany
							title={company3.title}
							text={company3.text}
							styles={styles.company_card_content_right}
						/>
						<CardCompany
							title={company4.title}
							text={company4.text}
							styles={styles.company_card_content_right}
						/>
					</div>
				</div>
			</div>
		</WrapperContainer>
	)
}
