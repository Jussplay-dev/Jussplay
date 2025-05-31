import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import styles from './new-header.module.scss'

export const HeaderLogo = () => {
	return (
		<div className={styles.header_nav_item_logo}>
			<Link to={'/home'}>
				<img src={logo} alt='header-logo' />
			</Link>
		</div>
	)
}
