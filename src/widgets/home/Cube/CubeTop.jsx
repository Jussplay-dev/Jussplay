import { CubeUi } from '../../../shared/ui/CubeUi'
import { CubeDegrees } from './CubeDegrees'
import { CubeLiner } from './CubeLiner'
import { MediaContent } from './CubeMedia'
import { CubeTitle } from './CubeTitle'

/* eslint-disable react/prop-types */
export const CubeTop = ({ styles }) => {
	return (
		<div className={styles.cube_top}>
			<div className={styles.cube_top_row}>
				<CubeTitle styles={styles} title={'Make'} />
				<CubeUi />
				<CubeTitle styles={styles} title={'More'} />
			</div>
			<MediaContent styles={styles} />
			<CubeLiner styles={styles} />
			<CubeDegrees styles={styles} />
		</div>
	)
}
