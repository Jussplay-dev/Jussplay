/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
// import DropdownContent from '../../components/headerDropdownContent'
import { HeaderArrowIcon } from './HeaderArrowIcon'
import { HeaderLogo } from './HeaderLogo'

export const Navigation = ({
	styles,
	onMouseEnterService,
	onClick,
	activeDropdown,
	onMouseEnterBlockchain,
}) => {
	return (
		<nav className={styles.header_nav}>
			<ul className={styles.header_nav_item}>
				<li onClick={onClick}>
					<div className={styles.header_nav_item_link_arrow}>
						<Link to='/service'>Services</Link>
						<HeaderArrowIcon
							onClick={onMouseEnterService}
							activeIcon={activeDropdown}
						/>
					</div>
					{/* {activeDropdown === 'services' && (
						<DropdownContent dropdownType='services' />
					)} */}
				</li>
				<li onClick={onClick}>
					<div className={styles.header_nav_item_link_arrow}>
						<Link to={'/blockchain'}>Blockchain</Link>
						<HeaderArrowIcon
							onClick={onMouseEnterBlockchain}
							activeIcon={activeDropdown}
						/>
					</div>
					{/* {activeDropdown === 'blockchain' && (
						<DropdownContent dropdownType='blockchain' />
					)} */}
				</li>
			</ul>

			<HeaderLogo />

			<ul className={styles.header_nav_item}>
				<li onClick={onClick}>
					<Link to='/contact-us'>Contact us</Link>
				</li>
				<li onClick={onClick}>
					<Link to='/about-us'>About us</Link>
				</li>
			</ul>
		</nav>
	)
}
