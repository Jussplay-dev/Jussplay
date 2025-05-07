import { useEffect, useState } from 'react'

export const useProgressAppLoader = () => {
	const [progress, setProgress] = useState(0)
	const [isDone, setIsDone] = useState(false)
	const [shouldRender, setShouldRender] = useState(true)

	useEffect(() => {
		let frameId

		const updateProgress = () => {
			setProgress(prev => {
				if (prev >= 100) {
					cancelAnimationFrame(frameId)
					setTimeout(() => setIsDone(true), 300) // подождем перед исчезновением
					return 100
				}
				return prev + 1
			})
			frameId = requestAnimationFrame(updateProgress)
		}

		frameId = requestAnimationFrame(updateProgress)
		return () => cancelAnimationFrame(frameId)
	}, [])

	const handleTransitionEnd = () => {
		if (isDone) {
			setShouldRender(false)
		}
	}

	return { progress, isDone, shouldRender, handleTransitionEnd }
}
