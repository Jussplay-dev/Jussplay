/* eslint-disable react/prop-types */
import iconMedia1 from '../../../assets/Cube/icon/01.svg'
import iconMedia2 from '../../../assets/Cube/icon/02.svg'
import iconMedia3 from '../../../assets/Cube/icon/03.svg'

export const MediaContent = ({ styles }) => {
	return (
		<div className={styles.media_content}>
			<img src={iconMedia1} alt='icon-media' />
			<img src={iconMedia2} alt='icon-media' />
			<img src={iconMedia3} alt='icon-media' />
		</div>
	)
}
