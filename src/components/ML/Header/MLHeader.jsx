/* eslint-disable react/prop-types */

import { Title } from '../../Blockchain/Title'

export const MLHeader = ({ title, text, styles, image }) => {
	return (
		<section className={styles.ml_header}>
			<div className={styles.ml_header_container}>
				<div className={styles.ml_header_row}>
					<Title title={title} subTitle={text} />
					<div className={styles.ml_header_assets}>
						<img src={image} alt={title} />
					</div>
				</div>
			</div>
		</section>
	)
}
