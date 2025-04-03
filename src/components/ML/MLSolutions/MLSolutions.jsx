/* eslint-disable react/prop-types */

import { WrapperContainer } from '../../../shared/ui/WrapperContainer'
import { Title } from '../../Blockchain/Title'

export const MLSolutions = ({
	title,
	text,
	cards,
	image,
	styles,
	blockchainStyle,
}) => {
	return (
		<WrapperContainer
			styles={styles.ml_section}
			blockchainStyle={blockchainStyle}
		>
			<div className={styles.ml_solution_row}>
				<div className={styles.ml_solution_item}>
					<Title title={title} subTitle={text} />
				</div>
				<div className={styles.ml_solution_item}>
					<img src={image} alt={title} />
				</div>
			</div>
			<div className={styles.ml_solution_row_body}>
				{cards.map(({ id, title, text, image }) => (
					<div key={id} className={styles.card_ml_solution}>
						<img src={image} alt={title} />
						<h1>{title}</h1>
						<p>{text}</p>
					</div>
				))}
			</div>
		</WrapperContainer>
	)
}
