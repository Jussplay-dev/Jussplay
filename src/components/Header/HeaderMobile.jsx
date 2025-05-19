/* eslint-disable react/prop-types */
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './header.module.scss'
import { HeaderSocial } from './HeaderSocial'

export const HeaderMobile = ({
	isMenuActive,
	playSound,
	menuItems,
	activeSubMenuIndex,
	setIsMenuActive,
	toggleSubMenu,
}) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)

	const handleDropdownToggle = index => {
		toggleSubMenu(index)
		setIsDropdownOpen(prev => !prev || activeSubMenuIndex !== index)
	}
	return (
		<div
			className={classNames(styles.header_menu, {
				[styles.header_menu_active]: isMenuActive,
				[styles.header_menu_inactive]: !isMenuActive,
			})}
		>
			<ul className={styles.header_menu_diagonal}>
				<Swiper
					direction={'vertical'}
					loop={false}
					pagination={false}
					modules={Navigation}
					slidesPerView={3}
					spaceBetween={activeSubMenuIndex === 3 ? 150 : 80}
					centeredSlides={true}
					observeParents={true}
					observer={true}
					className='mySwiper'
					allowTouchMove={!isDropdownOpen}
					onSlideChange={() => {
						if (window.innerWidth <= 520) {
							// Ensure it's mobile
							playSound()
						}
					}}
				>
					{menuItems.map((item, index) => (
						<SwiperSlide
							key={index}
							style={{
								...(index === activeSubMenuIndex
									? { marginBottom: 150 }
									: { marginBottom: 80 }),
							}}
						>
							<li className={styles.menuItemList}>
								<HashLink
									smooth
									to={item.path}
									onClick={() => setIsMenuActive(false)}
								>
									{item.name}
								</HashLink>
								{item.list && (
									<motion.div
										animate={{
											rotate: activeSubMenuIndex === index ? 180 : 0,
										}}
										transition={{ duration: 0.3, ease: 'backInOut' }}
									>
										<FaChevronDown
											size={35}
											onClick={() => handleDropdownToggle(index)}
										/>
									</motion.div>
								)}
							</li>
							{activeSubMenuIndex === index && (
								<motion.div
									animate={{
										y: activeSubMenuIndex ? -10 : 50,
										opacity: activeSubMenuIndex ? 1 : 0,
									}}
									transition={{ duration: 0.4, ease: 'easeOut' }}
									className={styles.activeHeaderSubMenu}
								>
									<ul>
										{item.list.map((subItem, index) => (
											<HashLink
												key={index}
												to={subItem.path}
												className={styles.subMenuItemLink}
											>
												<li style={{ fontSize: 26 }}>{subItem.name}</li>
											</HashLink>
										))}
									</ul>
								</motion.div>
							)}
						</SwiperSlide>
					))}
				</Swiper>
			</ul>

			<HeaderSocial setIsMenuActive={setIsMenuActive} />
		</div>
	)
}
