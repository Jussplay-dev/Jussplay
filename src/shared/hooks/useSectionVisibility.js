/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

export const useSectionVisibility = (ref, setVisibility) => {
	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5, // Порог в 50% видимости для активации
		}

		const observer = new IntersectionObserver(entires => {
			entires.forEach(entry => {
				if (entry.isIntersecting) {
					setVisibility(true)
				} else {
					setVisibility(false)
				}
			})
		}, observerOptions)

		if (ref.current) {
			observer.observe(ref.current)
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current)
			}
		}
	}, [ref, setVisibility])
}
