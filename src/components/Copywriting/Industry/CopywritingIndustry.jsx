/* eslint-disable react/prop-types */
import { WrapperContainer } from '../../../shared/ui/WrapperContainer'
import { TitleAi } from '../../AiBlockchain/ui/TitleAi'

export const CopywritingIndustry = ({
	title,
	listLeft,
	listRight,
	styles,
	blockchainStyle,
}) => {
	return (
		<WrapperContainer
			styles={styles.copywriting_section}
			blockchainStyle={blockchainStyle}
		>
			<TitleAi title={title} isCenter={true} styles={styles} />
			<div className={styles.industry_row}>
				<div className={styles.industry_list}>
					<ul>
						{listLeft.map(({ id, title }) => (
							<li key={id}>{title}</li>
						))}
					</ul>
				</div>
				<div className={styles.industry_lines}></div>
				<div className={styles.industry_list}>
					<ul>
						{listRight.map(({ id, title }) => (
							<li key={id}>{title}</li>
						))}
					</ul>
				</div>
			</div>
		</WrapperContainer>
	)
}
