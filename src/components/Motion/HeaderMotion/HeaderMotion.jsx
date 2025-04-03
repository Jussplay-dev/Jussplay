/* eslint-disable react/prop-types */
import { IoIosArrowForward } from 'react-icons/io'
import { HashLink } from 'react-router-hash-link'
import { WrapperContainer } from '../../../shared/ui/WrapperContainer'
import { TitleAi } from '../../AiBlockchain/ui/TitleAi'

export const HeaderMotion = ({
	title,
	text,
	image,
	styles,
	blockchainStyle,
}) => {
	return (
		<WrapperContainer
			styles={styles.gd_header}
			blockchainStyle={blockchainStyle}
		>
			<div className={styles.gd_header_content}>
				<TitleAi title={title} isCenter={true} text={text} styles={styles}>
					<HashLink to={'#startJourney'} smooth>
						<button className={styles.blockchainBtn}>
							Meet with us <IoIosArrowForward />
						</button>
					</HashLink>
				</TitleAi>
			</div>
			<img src={image} alt={title} />
		</WrapperContainer>
	)
}
