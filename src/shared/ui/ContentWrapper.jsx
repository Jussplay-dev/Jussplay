/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

export const ContentWrapper = ({ onContentReady }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			if (onContentReady) {
				onContentReady(true)
			}
		}, 0)

		return () => clearTimeout(timer)
	}, [onContentReady])
	return <Outlet />
}
