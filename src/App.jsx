import { AnimatePresence } from 'framer-motion'
import { Suspense, useCallback, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import pause from './assets/pause.png'
import play from './assets/play.png'
import playing from './assets/playing.png'
import { CustomCursor } from './components/cursor'
import { useSound } from './providers/soundContext'

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

// export function App() {
// 	const location = useLocation()
// 	const audioRef = useRef(null)
// 	const titleAudiRef = useRef(null)
// 	const { isPlaying, setIsPlaying } = useSound()
// 	const [isPaused, setIsPaused] = useState(false)
// 	// const [showForm, setShowForm] = useState(false)

// 	// const toggleForm = () => {
// 	// 	setShowForm(prev => !prev)
// 	// }

// 	const handleLottieClick = useCallback(() => {
// 		if (!audioRef.current) return

// 		if (isPlaying) {
// 			audioRef.current.pause()
// 			setIsPaused(true)
// 		} else {
// 			audioRef.current.play()
// 			setIsPaused(false)
// 			titleAudiRef.current?.classList.add('title-lottie__anim')
// 			setTimeout(() => {
// 				titleAudiRef.current && (titleAudiRef.current.style.display = 'none')
// 			}, 500)
// 		}

// 		setIsPlaying(prevState => !prevState)
// 	}, [isPlaying, setIsPlaying])

// 	return (
// 		<AnimatePresence mode='wait'>
// 			<CustomCursor />
// 			{/* <GetEstimationButton onClick={toggleForm} /> */}
// 			{/* {showForm && (
// 				<div className='form-overlay' onClick={toggleForm}>
// 					<div className='form-wrapper'>
// 						<GetEstimationForm />
// 					</div>
// 				</div>
// 			)} */}
// 			<audio ref={audioRef} src={AUDIO_SRC} type='audio/mpeg' loop />

// 			<div style={STYLES.audioControl} onClick={handleLottieClick}>
// 				{location.pathname === '/' && (
// 					<h1
// 						ref={titleAudiRef}
// 						className={isPlaying ? 'title-lottie__anim' : 'title-lottie'}
// 						style={{ color: 'gray' }}
// 					>
// 						For Better Experience Please Turn On Sound
// 					</h1>
// 				)}
// 				<img
// 					src={isPaused ? pause : isPlaying ? playing : play}
// 					alt={isPaused ? 'Pause' : isPlaying ? 'Playing' : 'Play'}
// 					style={{ width: ICON_SIZE }}
// 				/>
// 			</div>

// 			{/* <Suspense fallback={<div>Loading...</div>}> */}
// 			{/* <Header/> */}
// 			<Routes location={location} key={location.pathname}>
// 				<Route index element={<pages.Loader />} />
// 				<Route path='/home' element={<pages.Home />} />
// 				<Route path='/contactus' element={<pages.ContactUs />} />
// 				<Route path='/career' element={<pages.Career />} />
// 				<Route path='/aboutus' element={<pages.About />} />
// 				<Route path='/service' element={<pages.Service />} />
// 				<Route path='/blockchain' element={<pages.Blockchain />} />
// 				<Route path='/nft-token-development' element={<pages.Token />} />
// 				<Route path='/metaverse' element={<pages.Metaverse />} />
// 				<Route path='/web3-game-development' element={<pages.Blockchain4 />} />
// 				<Route
// 					path='/crypto-exchange-software-development'
// 					element={<pages.Blockchain6 />}
// 				/>
// 				<Route path='/web3' element={<pages.Web3 />} />
// 				<Route
// 					path='/android-app-development-company'
// 					element={<pages.Service1 />}
// 				/>
// 				<Route path='/service-ios' element={<pages.ServiceIos />} />
// 				<Route path='/wallet' element={<pages.Wallet />} />
// 				<Route path='/web-app' element={<pages.WebApp />} />
// 				<Route path='/service-chatbot' element={<pages.ChatBot />} />
// 				<Route path='/ai-service' element={<pages.Ai />} />
// 				<Route path='/ai-blockchain-wallet' element={<pages.AiBlockchain />} />
// 				<Route path='/service-web3' element={<pages.ServiceWeb3 />} />
// 				<Route path='/ml' element={<pages.ML />} />
// 				<Route path='/big-data' element={<pages.BD />} />
// 				<Route path='/gd' element={<pages.GD />} />
// 				<Route path='/motion' element={<pages.Motion />} />
// 				<Route path='/ui-ux' element={<pages.UiUx />} />
// 				<Route path='/copywriting' element={<pages.Copywriting />} />
// 				<Route path='*' element={<NotFoundPage />} />
// 			</Routes>
// 			{/* </Suspense> */}
// 		</AnimatePresence>
// 	)
// }

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
			titleAudiRef.current?.classList.add('title-lottie__anim')
			setTimeout(() => {
				titleAudiRef.current && (titleAudiRef.current.style.display = 'none')
			}, 500)
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
			<Suspense fallback={<div className='root-loader'>Loading...</div>}>
				<Outlet />
			</Suspense>
		</AnimatePresence>
	)
}
