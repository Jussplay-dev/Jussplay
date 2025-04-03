// Styles
import blockchainStyle from '../Blockchain/blockchain.module.scss'
import styles from './gd.module.scss'
// Components
import { BDBring } from '../../components/BIgData/BDBring/BDBring'
import { Title } from '../../components/Blockchain/Title'
import Footer from '../../components/Footer'
import { GDHeader } from '../../components/GD/Header/GDHeader'
import Header from '../../components/Header'
import { CustomScroll } from '../../components/scroll/CustomScroll'
import { GDAppAchievements } from '../../components/Service_2/IosLeoders/IosAppAchievements'
import { Aspects } from '../../components/ServiceWeb3/Aspects/Aspects'
import { TypesDevice } from '../../components/ServiceWeb3/TypesDevice/TypesDevice'
import {
	cardsGDCreative,
	cardsGDHighlighted,
	cardsGDProduction,
	imageGDAssets,
	imageGDHeader,
	imageGDService,
	textGDAssets,
	textGDHeader,
	textGDService,
	titleGDAssets,
	titleGDCreative,
	titleGDHeader,
	titleGDHighlighted,
	titleGDProduction,
	titleGDService,
} from '../../db/GD/graphic-design.db'
import transition from '../../pageTransition'
import { SectionRow } from '../../shared/ui/SectionRow'

export const GD = () => {
	return (
		<CustomScroll>
			<div className={blockchainStyle.page__blockchain}>
				<Header />
				<GDHeader
					title={titleGDHeader}
					text={textGDHeader}
					image={imageGDHeader}
					styles={styles}
					blockchainStyle={blockchainStyle}
				/>
				<main className={styles.gd_main}>
					<GDAppAchievements />
					<SectionRow image={imageGDAssets}>
						<Title title={titleGDAssets} subTitle={textGDAssets} />
					</SectionRow>
					<Aspects
						title={titleGDCreative}
						cards={cardsGDCreative}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<TypesDevice
						title={titleGDProduction}
						cards={cardsGDProduction}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<SectionRow image={imageGDService}>
						<Title title={titleGDService} subTitle={textGDService} />
					</SectionRow>
					<BDBring
						title={titleGDHighlighted}
						cards={cardsGDHighlighted}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
				</main>
				<Footer />
			</div>
		</CustomScroll>
	)
}

export default transition(GD)
