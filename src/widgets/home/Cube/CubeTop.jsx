import { CubeUi } from '../../../shared/ui/CubeUi'
import { CubeDegrees } from './CubeDegrees'
import { CubeLiner } from './CubeLiner'
import { CubeTitle } from './CubeTitle'
import { MediaContent } from './MediaContent'

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
