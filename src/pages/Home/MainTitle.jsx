/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import styles from './new-home.module.scss'

export const MainTitle = ({ title }) => {
	return (
		<motion.h1
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 1.5,
				ease: 'easeIn',
				stiffness: 100,
				damping: 10,
				type: 'just',
			}}
			className={styles.main_title}
		>
			{title && title}
		</motion.h1>
	)
}
