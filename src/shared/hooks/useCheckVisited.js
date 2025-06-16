import { useLayoutEffect } from 'react'

export const useCheckVisited = (token, navigate) => {
	useLayoutEffect(() => {
		if (!token) navigate('/home')
	}, [])
}
