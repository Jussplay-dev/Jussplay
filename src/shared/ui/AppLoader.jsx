/* eslint-disable react/prop-types */
import styles from './styles.module.scss'

export const AppLoader = ({
	progress,
	isDone,
	isReady,
	handleTransitionEnd,
}) => {
	const borderRadius = progress >= 100 ? '50%' : '12px'
	return (
		<div
			className={`${styles.loaderWrapper} ${isDone ? styles.fadeOut : ''}`}
			onTransitionEnd={handleTransitionEnd}
		>
			<div
				className={styles.spinner}
				style={{
					borderRadius,
					background: `conic-gradient(#6c5ce7 ${
						isReady ? progress : 1
					}%, #222 ${isReady ? progress : 1}%)`,
				}}
			></div>
			<span className={styles.text}>
				{progress < 100 ? `Loading... ${isReady ? progress : 0}%` : 'Done!'}
			</span>
		</div>
	)
}
