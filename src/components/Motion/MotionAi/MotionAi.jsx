/* eslint-disable react/prop-types */
import { IoIosArrowForward } from 'react-icons/io'
import { HashLink } from 'react-router-hash-link'
import { WrapperContainer } from '../../../shared/ui/WrapperContainer'
import { TitleAi } from '../../AiBlockchain/ui/TitleAi'

export const MotionAi = ({
	title,
	text,
	image,
	imageMobile,
	styles,
	blockchainStyle,
}) => {
	return (
		<WrapperContainer
			styles={styles.motion_ai}
			blockchainStyle={blockchainStyle}
		>
			<div className={styles.motion_ai_content}>
				<TitleAi title={title} isCenter={false} text={text} styles={styles}>
					<HashLink to={'#startJourney'} smooth>
						<button className={styles.blockchainBtn}>
							Meet with us <IoIosArrowForward />
						</button>
					</HashLink>
				</TitleAi>
			</div>
			<img src={image} alt={title} />
			{imageMobile && (
				<img className={styles.img_mobile} src={imageMobile} alt={title} />
			)}
		</WrapperContainer>
	)
}
