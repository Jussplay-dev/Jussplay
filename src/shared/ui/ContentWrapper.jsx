/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

export const ContentWrapper = ({ onContentReady }) => {
	const [contentLoaded, setContentLoaded] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setContentLoaded(true)
			if (onContentReady) {
				onContentReady(true)
			}
		}, 0)

		return () => clearTimeout(timer)
	}, [onContentReady])
	return <Outlet />
}
