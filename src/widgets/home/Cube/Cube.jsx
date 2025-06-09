import { useRef, useState } from 'react'
import { useSectionVisibility } from '../../../shared/hooks/useSectionVisibility'
import { IconEllipse } from '../../../shared/ui/Icons'
import { Container } from '../../../shared/ui/WrapperContainer'
import styles from './cube.module.scss'
import { CubeBody } from './CubeBody'
import { CubeTop } from './CubeTop'

export const Cube = () => {
	const cubeBodySectionRef = useRef(null)
	const [visible, setIsVisible] = useState(false)

	useSectionVisibility(cubeBodySectionRef, setIsVisible)
	return (
		<section className={styles.section__cube}>
			<Container>
				<CubeTop styles={styles} />
				<CubeBody
					styles={styles}
					visible={visible}
					sectionRef={cubeBodySectionRef}
					introAboutId={'aboutId'}
				/>
			</Container>
			<IconEllipse styles={styles.cube_ellipse} />
		</section>
	)
}
