import { useEffect, useState } from 'react'

export const useComponentReady = () => {
	const [isReady, setIsReady] = useState(false)

	useEffect(() => {
		setIsReady(true)
	}, [])

	return isReady
}
