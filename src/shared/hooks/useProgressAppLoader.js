/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react'

export const useProgressAppLoader = isContentReady => {
	const [progress, setProgress] = useState(0)
	const [isDone, setIsDone] = useState(false)
	const [shouldRender, setShouldRender] = useState(true)
	const frameId = useRef(null)

	useEffect(() => {
		let startTime = null
		const duration = 1500 // Минимальная длительность анимации (1.5 секунды)
		const accelerationFactor = 0.02 // Фактор ускорения, когда контент готов

		const animateProgress = currentTime => {
			if (!startTime) startTime = currentTime
			const elapsedTime = currentTime - startTime

			let newProgress

			if (isContentReady) {
				// Если контент готов, быстро доводим прогресс до 100%
				newProgress = Math.min(progress + (progress < 90 ? 2 : 1), 100) // Ускоряем в конце
			} else {
				// Иначе, плавно увеличиваем прогресс до 90-95%
				// Не доводим до 100%, пока контент не будет готов
				const targetPartialProgress = 95 // Максимальный прогресс до готовности контента
				newProgress = Math.min(
					(elapsedTime / duration) * targetPartialProgress,
					targetPartialProgress
				)
			}

			setProgress(Math.floor(newProgress))

			if (newProgress >= 100) {
				cancelAnimationFrame(frameId.current)
				// Небольшая задержка перед исчезновением, чтобы пользователь успел увидеть "Done!"
				setTimeout(() => setIsDone(true), 300)
			} else {
				frameId.current = requestAnimationFrame(animateProgress)
			}
		}

		frameId.current = requestAnimationFrame(animateProgress)

		return () => {
			cancelAnimationFrame(frameId.current)
		}
	}, [isContentReady, progress]) // Добавили isContentReady и progress в зависимости

	const handleTransitionEnd = () => {
		if (isDone) {
			setShouldRender(false)
		}
	}

	return { progress, isDone, shouldRender, handleTransitionEnd }
}
