/* eslint-disable no-mixed-spaces-and-tabs */
import { motion } from 'framer-motion'
import { Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import pause from './assets/pause.png'
import play from './assets/play.png'
import playing from './assets/playing.png'
import { CustomCursor } from './components/cursor'
import { pages } from './constants/pages'
import { useSound } from './providers/soundContext'
import { useProgressAppLoader } from './shared/hooks/useProgressAppLoader'
import { AppLoader } from './shared/ui/AppLoader'

export const AUDIO_SRC = '/MenuSound.mp3'
export const ICON_SIZE = '40px'

const STYLES = {
	audioControl: {
		position: 'fixed',
		bottom: 20,
		right: 20,
		zIndex: 1000,
		display: 'flex',
		alignItems: 'center',
		gap: 15,
	},
}

export const RootLayout = () => {
	const location = useLocation()
	const audioRef = useRef(null)
	const titleAudiRef = useRef(null)

	const { isPlaying, setIsPlaying } = useSound()
	const [isPaused, setIsPaused] = useState(false)
	const [isMainPageLoaderVisible, setIsMainPageLoaderVisible] = useState(true)
	const [isMainPageLoaderReady, setIsMainPageLoaderReady] = useState(false)
	const [isOtherContentLoaded, setIsOtherContentLoaded] = useState(false)
	const [isContentActuallyVisible, setIsContentActuallyVisible] =
		useState(false)

	const {
		progress: appLoaderProgress,
		isDone: isAppLoaderDone,
		handleTransitionEnd: handleAppLoaderTransitionEnd,
		shouldRender: shouldRenderAppLoader,
	} = useProgressAppLoader(isOtherContentLoaded)

	const handleAudioToggle = useCallback(() => {
		if (!audioRef.current) return

		if (isPlaying) {
			audioRef.current.pause()
			setIsPaused(true)
		} else {
			audioRef.current.play()
			setIsPaused(false)
			if (titleAudiRef.current) {
				titleAudiRef.current.classList.add('title-lottie__anim')
				setTimeout(() => {
					if (titleAudiRef.current) {
						titleAudiRef.current.style.display = 'none'
					}
				}, 500)
			}
		}

		setIsPlaying(prev => !prev)
	}, [isPlaying, setIsPlaying])

	useEffect(() => {
		if (location.pathname === '/') {
			setIsMainPageLoaderVisible(true)
			setIsMainPageLoaderReady(false)
			setIsOtherContentLoaded(false)
		} else {
			setIsMainPageLoaderVisible(false)
			setIsMainPageLoaderReady(false)
			setIsOtherContentLoaded(false)

			const timer = setTimeout(() => setIsOtherContentLoaded(true), 1200)
			return () => clearTimeout(timer)
		}
	}, [location.pathname])

	const handleMainPageLoaderComplete = useCallback(() => {
		setIsMainPageLoaderReady(true)
	}, [])

	useEffect(() => {
		let timer
		if (location.pathname === '/') {
			if (isMainPageLoaderReady) {
				timer = setTimeout(() => setIsContentActuallyVisible(true), 300)
			} else {
				setIsContentActuallyVisible(false)
			}
		} else {
			if (isAppLoaderDone && !shouldRenderAppLoader) {
				timer = setTimeout(() => setIsContentActuallyVisible(true), 300)
			} else {
				setIsContentActuallyVisible(false)
			}
		}
		return () => clearTimeout(timer)
	}, [
		location.pathname,
		isMainPageLoaderReady,
		isAppLoaderDone,
		shouldRenderAppLoader,
	])

	const showMainPageLoader =
		location.pathname === '/' &&
		isMainPageLoaderVisible &&
		!isMainPageLoaderReady

	const showAppLoader = location.pathname !== '/' && shouldRenderAppLoader

	return (
		<>
			{/* Эти элементы всегда рендерятся, на всех страницах */}
			<CustomCursor />
			<audio ref={audioRef} src={AUDIO_SRC} type='audio/mpeg' loop />
			<div style={STYLES.audioControl} onClick={handleAudioToggle}>
				{location.pathname === '/' && (
					<h1
						ref={titleAudiRef}
						className={isPlaying ? 'title-lottie__anim' : 'title-lottie'}
						style={{ color: 'gray' }}
					>
						For Better Experience Please Turn On Sound
					</h1>
				)}
				<img
					src={isPaused ? pause : isPlaying ? playing : play}
					alt={isPaused ? 'Pause' : isPlaying ? 'Playing' : 'Play'}
					style={{ width: ICON_SIZE }}
				/>
			</div>

			{/* <AnimatePresence mode='wait'> */}
			{showMainPageLoader && (
				<motion.div
					key='main-page-loader'
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.7 }}
				>
					<Suspense fallback={'loading...'}>
						<pages.Loader onComplete={handleMainPageLoaderComplete} />
					</Suspense>
				</motion.div>
			)}

			{showAppLoader && (
				<motion.div
					key='app-loader'
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.7 }}
				>
					<AppLoader
						progress={appLoaderProgress}
						isDone={isAppLoaderDone}
						handleTransitionEnd={handleAppLoaderTransitionEnd}
					/>
				</motion.div>
			)}

			<motion.div
				key={location.key || 'outlet-content'}
				initial={{ opacity: 0 }}
				animate={{ opacity: isContentActuallyVisible ? 1 : 0 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.7 }}
				style={{
					position: showMainPageLoader || showAppLoader ? 'fixed' : 'static',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					overflow: showMainPageLoader || showAppLoader ? 'hidden' : 'auto',
					zIndex: showMainPageLoader || showAppLoader ? -1 : 'auto',
					pointerEvents: isContentActuallyVisible ? 'auto' : 'none',
				}}
			>
				<Outlet />
			</motion.div>
			{/* </AnimatePresence> */}
		</>
	)
}
