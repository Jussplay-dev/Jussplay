// Styles
import blockchainStyle from '../Blockchain/blockchain.module.scss'
import styles from './motion.module.scss'
// Components
import { BDBring } from '../../components/BIgData/BDBring/BDBring'
import { Title } from '../../components/Blockchain/Title'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { HeaderMotion } from '../../components/Motion/HeaderMotion/HeaderMotion'
import { MotionAi } from '../../components/Motion/MotionAi/MotionAi'
import { CustomScroll } from '../../components/scroll/CustomScroll'
import { MotionService } from '../../components/Sercvie-1/ScrollSec'
import { GDAppAchievements } from '../../components/Service_2/IosLeoders/IosAppAchievements'
import {
	cardsImageMotionServicesBody,
	cardsMotionPartner,
	imageMobileMotionAi,
	imageMotionAi,
	imageMotionExpert,
	imageMotionHeader,
	imageMotionServicesBody,
	textMotionAi,
	textMotionExpert,
	textMotionHeader,
	titleMotionAi,
	titleMotionExpert,
	titleMotionHeader,
	titleMotionPartner,
} from '../../db/GD/motion.db'
import transition from '../../pageTransition'
import { SectionRow } from '../../shared/ui/SectionRow'

const Motion = () => {
	return (
		<CustomScroll>
			<div className={blockchainStyle.page__blockchain}>
				<Header />
				<HeaderMotion
					title={titleMotionHeader}
					text={textMotionHeader}
					styles={styles}
					blockchainStyle={blockchainStyle}
					image={imageMotionHeader}
				/>
				<main className={styles.motion_main}>
					<GDAppAchievements />
					<SectionRow image={imageMotionExpert}>
						<Title title={titleMotionExpert} subTitle={textMotionExpert} />
					</SectionRow>
					<MotionService />
					<div className={styles.motion_section}>
						<div className={styles.team}>
							<img src={imageMotionServicesBody} alt='service-body' />
						</div>
						<div className={styles.team_mobile}>
							{cardsImageMotionServicesBody.map(({ id, image }) => (
								<div key={id} className={styles.team_mobile_card}>
									<img src={image} alt={id} />
								</div>
							))}
						</div>
					</div>
					<MotionAi
						title={titleMotionAi}
						text={textMotionAi}
						image={imageMotionAi}
						imageMobile={imageMobileMotionAi}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<BDBring
						title={titleMotionPartner}
						cards={cardsMotionPartner}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
				</main>
				<Footer />
			</div>
		</CustomScroll>
	)
}

export default transition(Motion)
