/* eslint-disable react/prop-types */

import { TitleAi } from '../ui/TitleAi'

export const RisingMax = ({
	title,
	listOne,
	listTwo,
	styles,
	blockchainStyle,
}) => {
	return (
		<section className={styles.aiBlockchain_section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleAi styles={styles} title={title} text={false} isCenter={true} />
				<div className={styles.rising_max_row}>
					<div className={styles.rising_max_item_list}>
						<ul>
							{listOne.map(listAi => (
								<li key={listAi.id}>{listAi.list}</li>
							))}
						</ul>
					</div>
					<div className={styles.rising_max_item_list}>
						<ul>
							{listTwo.map(listAi => (
								<li key={listAi.id}>{listAi.list}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
