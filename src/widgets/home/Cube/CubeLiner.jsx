/* eslint-disable react/prop-types */
import liner from '../../../assets/Cube/ellipse.svg'

export const CubeLiner = ({ styles }) => {
	return (
		<div className={styles.cube_liner}>
			<img src={liner} alt='liner' />
		</div>
	)
}
