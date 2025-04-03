/* eslint-disable react/prop-types */

import { IoIosArrowForward } from 'react-icons/io'
import { HashLink } from 'react-router-hash-link'
import { WrapperContainer } from '../../../shared/ui/WrapperContainer'
import { TitleAi } from '../../AiBlockchain/ui/TitleAi'

export const Techno = ({
	title,
	text,
	list,
	image,
	styles,
	blockchainStyle,
}) => {
	return (
		<WrapperContainer
			styles={styles.ml_section}
			blockchainStyle={blockchainStyle}
		>
			<div className={styles.ml_techno_row}>
				<div className={styles.ml_techno_item}>
					<TitleAi title={title} text={text} styles={styles} isCenter={false}>
						<ul>
							{list.map(({ id, title }) => (
								<li key={id}>{title}</li>
							))}
						</ul>
						<HashLink to={'#startJourney'} smooth>
							<button className={blockchainStyle.blockchainBtn}>
								Meet with us <IoIosArrowForward />
							</button>
						</HashLink>
					</TitleAi>
				</div>
				<div className={styles.ml_techno_item}>
					<img src={image} alt={title} />
				</div>
			</div>
		</WrapperContainer>
	)
}
