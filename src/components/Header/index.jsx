import classNames from 'classnames'
import { memo, useEffect, useRef, useState } from 'react'

import select from '../../assets/select_V2.wav'
import { useSound } from '../../providers/soundContext'
import styles from './header.module.scss'

import { useNavigate } from 'react-router-dom'
import { HeaderButton } from './HeaderButton'
import { HeaderLogo } from './HeaderLogo'
import { HeaderMobile } from './HeaderMobile'
import { Nav } from './Nav'

const menuItems = [
	{ name: 'Home', path: '/home/#hero' },
	// { name: "Projects", path: "/home/#projects" },
	{ name: 'Service', path: '/service' },
	{ name: 'About us', path: '/aboutus' },
	{ name: 'Contact us', path: '/contactus' },
	{
		name: 'Android-app ',
		path: '/android-app-development-company',
	},
	{ name: ' Service-ios ', path: '/service-ios' },
	{ name: ' WebApp ', path: '/web-app' },
	{ name: 'Android App', path: '/android-app-development-company' },
	{ name: 'Chatbot', path: '/service-chatbot' },
	{ name: 'Ai-service', path: '/ai-service' },
	{ name: 'Service-web3', path: '/service-web3' },
	{ name: 'ML', path: '/ml' },
	{ name: 'BigData', path: '/big-data' },
	{ name: 'Graphic-Design', path: '/gd' },
	{ name: 'Motion', path: '/motion' },
	{ name: 'UI/UX', path: '/ui-ux' },
	{ name: 'Copywriting', path: '/copywriting' },
	{
		name: 'Blockchain',
		path: '/blockchain',
	},
	{ name: 'Token', path: '/nft-token-development' },
	{ name: 'Metaverse ', path: '/metaverse' },
	{ name: 'Web3-game-development', path: '/web3-game-development' },
	{ name: 'Web3 ', path: '/web3' },
	{
		name: 'Crypto-exchange-development ',
		path: '/crypto-exchange-software-development',
	},
	{ name: 'Wallet ', path: '/wallet' },
]

export default memo(function Header({ children, position }) {
	const [isMenuActive, setIsMenuActive] = useState(false)
	const [activeDropdown, setActiveDropdown] = useState(null)
	const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(null)

	const [isHeaderVisible, setIsHeaderVisible] = useState(true)
	const [isUserScrollingUp, setIsUserScrollingUp] = useState(false)

	const navigate = useNavigate()

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

	useEffect(() => {
		let lastScrollY = 0

		const handleScroll = event => {
			const scrollTop = event.detail ? event.detail.scrollTop : window.scrollY

			if (window.innerWidth > 768) {
				if (scrollTop > lastScrollY) {
					setIsHeaderVisible(false)
					setIsUserScrollingUp(false)
				} else {
					setIsUserScrollingUp(true)
				}
				lastScrollY = scrollTop
			}
		}

		window.addEventListener('customScroll', handleScroll)

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('customScroll', handleScroll)
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const toggleHeader = () => {
		setIsHeaderVisible(prev => !prev)
	}

	const toggleSubMenu = index => {
		setActiveSubMenuIndex(prevIndex => (prevIndex === index ? null : index))
	}

	return (
		<>
			<header
				className={classNames(styles.header, {
					[styles.hidden]: !isHeaderVisible,
				})}
			>
				<HeaderLogo onClick={playSound} />
				<Nav
					onMouseEnterService={() => handleMouseEnter('services')}
					onMouseEnterBlockchain={() => handleMouseEnter('blockchain')}
					onClick={playSound}
					onMouseLeave={handleMouseLeave}
					activeDropdown={activeDropdown}
				/>
				<div
					className={styles.header_menuBtn}
					onClick={() => setIsMenuActive(true)}
				>
					menu
				</div>
				{/* <div className={styles.header__logo}>{children}</div> */}
				<HeaderMobile
					isMenuActive={isMenuActive}
					playSound={playSound}
					menuItems={menuItems}
					activeSubMenuIndex={activeSubMenuIndex}
					setIsMenuActive={setIsMenuActive}
					toggleSubMenu={toggleSubMenu}
					navigate={navigate}
				/>
			</header>
			{/* Show Button When Header is Hidden */}

			{!isHeaderVisible && window.innerWidth > 768 && (
				<HeaderButton
					toggleHeader={toggleHeader}
					isHeaderVisible={isHeaderVisible}
				/>
			)}
		</>
	)
})
