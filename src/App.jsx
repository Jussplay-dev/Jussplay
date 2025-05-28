import { AnimatePresence } from 'framer-motion'
import { Suspense, useCallback, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import pause from './assets/pause.png'
import play from './assets/play.png'
import playing from './assets/playing.png'
import { CustomCursor } from './components/cursor'
import { useSound } from './providers/soundContext'
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

		setIsPlaying(prevState => !prevState)
	}, [isPlaying, setIsPlaying])

	return (
		<AnimatePresence mode='wait'>
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
			{location.pathname === '/' ? (
				<Outlet key={location.pathname} />
			) : (
				<Suspense fallback={<AppLoader />} key={location.pathname}>
					<Outlet />
				</Suspense>
			)}
		</AnimatePresence>
	)
}
