// Styles
import blockchainStyle from '../Blockchain/blockchain.module.scss'
import styles from './uiux.module.scss'
// Components
import { BDBring } from '../../components/BIgData/BDBring/BDBring'
import { Title } from '../../components/Blockchain/Title'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { HeaderMotion } from '../../components/Motion/HeaderMotion/HeaderMotion'
import { MotionAi } from '../../components/Motion/MotionAi/MotionAi'
import { CustomScroll } from '../../components/scroll/CustomScroll'
import { UiUxService } from '../../components/Sercvie-1/ScrollSec'
import { GDAppAchievements } from '../../components/Service_2/IosLeoders/IosAppAchievements'
import {
	cardsUiUxPartner,
	imageUiUxAiEnhanced,
	imageUiUxAttention,
	imageUiUxHeader,
	textUiUxAiEnhanced,
	textUiUxAttention,
	textUiUxHeader,
	titleUiUxAiEnhanced,
	titleUiUxAttention,
	titleUiUxHeader,
	titleUiUxPartner,
} from '../../db/GD/ui-ux.db'
import transition from '../../pageTransition'
import { SectionRow } from '../../shared/ui/SectionRow'

const UiUx = () => {
	return (
		<CustomScroll>
			<div className={blockchainStyle.page__blockchain}>
				<Header />
				<HeaderMotion
					title={titleUiUxHeader}
					text={textUiUxHeader}
					image={imageUiUxHeader}
					styles={styles}
					blockchainStyle={blockchainStyle}
				/>
				<main className={styles.ui_main}>
					<GDAppAchievements />
					<SectionRow image={imageUiUxAttention}>
						<Title title={titleUiUxAttention} subTitle={textUiUxAttention} />
					</SectionRow>
					<UiUxService />
					<MotionAi
						title={titleUiUxAiEnhanced}
						text={textUiUxAiEnhanced}
						image={imageUiUxAiEnhanced}
						imageMobile={false}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<BDBring
						title={titleUiUxPartner}
						cards={cardsUiUxPartner}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
				</main>
				<Footer />
			</div>
		</CustomScroll>
	)
}

export default transition(UiUx)
