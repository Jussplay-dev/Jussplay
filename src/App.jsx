/* eslint-disable no-mixed-spaces-and-tabs */
import { motion } from 'framer-motion'
import {
	startTransition,
	Suspense,
	useCallback,
	useEffect,
	useState,
} from 'react'
import { useLocation } from 'react-router-dom'
// import { pages } from './constants/pages.jsx'
import { useProgressAppLoader } from './shared/hooks/useProgressAppLoader'
import { AppLoader } from './shared/ui/AppLoader'
import { AudioControl } from './shared/ui/AudioControl'
import { ContentWrapper } from './shared/ui/ContentWrapper'

// Todo: Добавить key для других страницы

export const RootLayout = () => {
	const location = useLocation()

	// const [isMainPageLoaderVisible, setIsMainPageLoaderVisible] = useState(true)
	// const [isMainPageLoaderReady, setIsMainPageLoaderReady] = useState(false)
	const [isContentLoaded, setIsContentLoaded] = useState(false)
	const [isContentActuallyVisible, setIsContentActuallyVisible] =
		useState(false)

	const {
		progress: appLoaderProgress,
		isDone: isAppLoaderDone,
		handleTransitionEnd: handleAppLoaderTransitionEnd,
		shouldRender: shouldRenderAppLoader,
	} = useProgressAppLoader(isContentLoaded)

	useEffect(() => {
		startTransition(() => {
			if (location.pathname) {
				setIsContentLoaded(false)
			}
			// if (location.pathname === '/') {
			// 	// setIsMainPageLoaderVisible(true)
			// 	setIsMainPageLoaderReady(false)
			// 	setIsOtherContentLoaded(false)
			// } else {
			// setIsMainPageLoaderVisible(false)
			// setIsMainPageLoaderReady(false)
			// }
		})
	}, [location.pathname])

	// const handleMainPageLoaderComplete = useCallback(() => {
	// 	startTransition(() => {
	// 		setIsMainPageLoaderReady(true)
	// 	})
	// }, [])

	const handleContentLoaded = useCallback(isReady => {
		startTransition(() => {
			setIsContentLoaded(isReady)
		})
	}, [])

	useEffect(() => {
		let timer
		startTransition(() => {
			// Теперь isAppLoaderDone будет срабатывать, когда isOtherContentLoaded станет true
			if (location.pathname && isAppLoaderDone && !shouldRenderAppLoader) {
				timer = setTimeout(() => setIsContentActuallyVisible(true), 300)
			} else {
				setIsContentActuallyVisible(false)
			}
			// if (location.pathname === '/') {
			// 	if (isMainPageLoaderReady) {
			// 		timer = setTimeout(() => setIsContentActuallyVisible(true), 300)
			// 	} else {
			// 		setIsContentActuallyVisible(false)
			// 	}
			// } else {
			// }
			// })
		})

		return () => clearTimeout(timer)
	}, [isAppLoaderDone, location.pathname, shouldRenderAppLoader])

	// const showMainPageLoader =
	// 	location.pathname === '/' &&
	// 	isMainPageLoaderVisible &&
	// 	!isMainPageLoaderReady

	const showAppLoader = shouldRenderAppLoader

	return (
		<>
			{/* Эти элементы всегда рендерятся, на всех страницах */}
			<AudioControl />

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
						isReady={isContentLoaded}
						handleTransitionEnd={handleAppLoaderTransitionEnd}
					/>
				</motion.div>
			)}

			{/* {showAppLoader && (
				<motion.div
					key='main-page-loader'
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.7 }}
				>
					<Suspense fallback={''}>
						<pages.Loader onComplete={handleMainPageLoaderComplete} />
					</Suspense>
				</motion.div>
			)} */}

			<motion.div
				key={location.key || 'outlet-content'}
				initial={{ opacity: 0 }}
				animate={{ opacity: isContentActuallyVisible ? 1 : 0 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.7 }}
				style={{
					position: showAppLoader ? 'fixed' : 'static',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					overflow: showAppLoader ? 'hidden' : 'auto',
					zIndex: showAppLoader ? -1 : 'auto',
					pointerEvents: isContentActuallyVisible ? 'auto' : 'none',
				}}
			>
				<Suspense fallback={null}>
					<ContentWrapper onContentReady={handleContentLoaded} />
				</Suspense>
			</motion.div>
		</>
	)
}
