import { useRef, useState } from 'react'
import select from '../../assets/select_V2.wav'
import { HeaderMobile } from '../../components/Header/HeaderMobile'
import { menuItems } from '../../constants/header'
import { useSound } from '../../providers/soundContext'
import { Container } from '../../shared/ui/WrapperContainer'
import { HeaderBurger } from './HeaderBurger'
import { HeaderLogo } from './HeaderLogo'
import { Navigation } from './Navigation'
import styles from './new-header.module.scss'

export const Header = () => {
	const [isMenuActive, setIsMenuActive] = useState(false)
	const [activeDropdown, setActiveDropdown] = useState(null)
	const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(null)
	const [isActiveDropdown, setIsActiveDropdown] = useState(false)

	const [isHeaderVisible, setIsHeaderVisible] = useState(true)
	// const navigate = useNavigate()

	const audioRef = useRef(new Audio(select))
	const { isPlaying } = useSound()

	const playSound = () => {
		if (isPlaying) {
			audioRef.current.currentTime = 0
			audioRef.current.play()
		}
	}

	const handleMouseEnter = dropdown => setActiveDropdown(dropdown)

	const handleMouseLeave = () => setActiveDropdown(null)

	const handleClickDropdown = dropdown => {
		setIsActiveDropdown(prev => !prev)

		if (isActiveDropdown) {
			handleMouseEnter(dropdown)
		} else {
			handleMouseLeave
		}
	}

	// useEffect(() => {
	// 	let lastScrollY = 0

	// 	const handleScroll = event => {
	// 		const scrollTop = event.detail ? event.detail.scrollTop : window.scrollY

	// 		if (window.innerWidth > 768) {
	// 			if (scrollTop > lastScrollY) {
	// 				setIsHeaderVisible(false)
	// 				// setIsUserScrollingUp(false)
	// 			} else {
	// 				// setIsUserScrollingUp(true)
	// 			}
	// 			lastScrollY = scrollTop
	// 		}
	// 	}

	// 	window.addEventListener('customScroll', handleScroll)

	// 	window.addEventListener('scroll', handleScroll)

	// 	return () => {
	// 		window.removeEventListener('customScroll', handleScroll)
	// 		window.removeEventListener('scroll', handleScroll)
	// 	}
	// }, [])

	const toggleHeader = () => {
		setIsHeaderVisible(prev => !prev)
	}

	const toggleSubMenu = index => {
		setActiveSubMenuIndex(prevIndex => (prevIndex === index ? null : index))
	}

	return (
		<header className={styles.header}>
			<Container>
				<Navigation
					styles={styles}
					onMouseEnterService={() => handleClickDropdown('services')}
					onMouseEnterBlockchain={() => handleClickDropdown('blockchain')}
					onClick={playSound}
					// onMouseLeave={handleMouseLeave}
					activeDropdown={activeDropdown}
				/>
				<div className={styles.header_mobile}>
					<HeaderLogo />
					<HeaderBurger onClick={() => setIsMenuActive(true)} />
				</div>

				<HeaderMobile
					isMenuActive={isMenuActive}
					playSound={playSound}
					menuItems={menuItems}
					activeSubMenuIndex={activeSubMenuIndex}
					toggleSubMenu={toggleSubMenu}
					setIsMenuActive={setIsMenuActive}
				/>
			</Container>
		</header>
	)
}
