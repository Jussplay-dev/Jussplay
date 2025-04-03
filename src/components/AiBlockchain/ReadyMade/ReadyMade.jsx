/* eslint-disable react/prop-types */
import { BtnBlockchain } from '../../Button/Blockchain/BtnBlockchain'
import { TitleAi } from '../ui/TitleAi'

export const ReadyMade = ({ title, text, image, styles }) => {
	return (
		<section className={styles.aiBlockchain_section}>
			<div className={styles.ready_made_content}>
				<div className={styles.ready_made_item}>
					<TitleAi title={title} text={text} isCenter={false} styles={styles}>
						<BtnBlockchain />
					</TitleAi>
				</div>
				<div className={styles.ready_made_image}>
					<img src={image} alt={title} />
				</div>
			</div>
		</section>
	)
}
