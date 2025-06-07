/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from 'react'
import gameImage from '../../assets/game.png'
import webImage from '../../assets/web.jpeg'
import { TitleBlockchain } from '../../pages/Blockchain/TitleBlockchain'
import { useSectionVisibility } from '../hooks/useSectionVisibility'
import { Container } from './WrapperContainer'
import styles from './styles.module.scss'

export const ExperimentalScrollSection = () => {
	const gameSectionRef = useRef(null)
	const webSectionRef = useRef(null)

	const [isGameVisible, setGameVisible] = useState(false)
	const [isWebVisible, setWebVisible] = useState(false)

	useSectionVisibility(gameSectionRef, setGameVisible)
	useSectionVisibility(webSectionRef, setWebVisible)

	return (
		<section>
			<Container>
				<TitleBlockchain title={'Scroll section test'} />
				<div className={styles.test_wrapper_scroll_section}>
					<div className={styles.test_row_scroll_section} ref={gameSectionRef}>
						<div className={styles.test_scroll_content}>
							<h1>Unlock New Realms of Imagination</h1>
							<h2>Game development</h2>
							<p>
								At Jussplay.devs, we breathe life into your gaming ideas. From
								heart-pounding action games to immersive educational
								experiences.{' '}
								<span>
									Our dedicated team harnesses the latest technologies to
									deliver captivating gameplay and stunning graphics.
								</span>
							</p>
						</div>
						<div
							className={`${styles.test_scroll_content_image} 
								${isGameVisible ? styles.test_scroll_content_active_image : ''}`}
						>
							<img src={gameImage} alt='' />
						</div>
					</div>
					<div className={styles.test_row_scroll_section} ref={webSectionRef}>
						<div className={styles.test_scroll_content}>
							<h1>Crafting Your Digital Gateway</h1>
							<h2>Web development</h2>
							<p>
								Your website is the front door to your business, and at
								Jussplay.devs, we ensure it's both inviting and efficient.{' '}
								<span>
									Our web development services are tailored to create custom
									sites that are not only visually appealing but also highly
									functional.
								</span>
							</p>
						</div>
						<div
							className={`
								${styles.test_scroll_content_image} 
								${isWebVisible ? styles.test_scroll_content_active_image : ''}
							`}
						>
							<img src={webImage} alt='' />
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export const ContentScrollSection = ({
	supTitle,
	title,
	subTitle,
	text,
	ref,
	styles,
	isVisible,
	image,
}) => {
	return (
		<div className={styles.test_row_scroll_section} ref={ref}>
			<div className={styles.test_scroll_content}>
				<h1>{supTitle ?? 'Sup title'}</h1>
				<h2>{title ?? 'Title'}</h2>
				<p>
					{subTitle ?? ''} <span>{text ?? ''}</span>
				</p>
			</div>
			<div
				className={`${styles.test_scroll_content_image} 
								${isVisible ? styles.test_scroll_content_active_image : ''}`}
			>
				<img src={image} alt={title ?? 'image'} />
			</div>
		</div>
	)
}
