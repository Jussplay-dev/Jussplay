import { useProgressAppLoader } from '../hooks/useProgressAppLoader'
import styles from './styles.module.scss'

export const AppLoader = () => {
	const { progress, isDone, shouldRender, handleTransitionEnd } =
		useProgressAppLoader()

	if (!shouldRender) return null

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
					background: `conic-gradient(#6c5ce7 ${progress}%, #222 ${progress}%)`,
				}}
			></div>
			<span className={styles.text}>
				{progress < 100 ? `Loading... ${progress}%` : 'Done!'}
			</span>
		</div>
	)
}
