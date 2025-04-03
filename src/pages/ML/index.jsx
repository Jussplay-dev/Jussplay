// Styles
import blockchainStyle from '../Blockchain/blockchain.module.scss'
import styles from './ml.module.scss'
// Components
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { MLHeader } from '../../components/ML/Header/MLHeader'
import { MLFirm } from '../../components/ML/MLFirm/MLFirm'
import { MLIndustries } from '../../components/ML/MLIndustries/MLIndustries'
import { MLService } from '../../components/ML/MLService/MLService'
import { MLSolutions } from '../../components/ML/MLSolutions/MLSolutions'
import { MLTable } from '../../components/ML/MLTable/MLTable'
import { Techno } from '../../components/ML/Techno/Techno'
import { CustomScroll } from '../../components/scroll/CustomScroll'
import {
	cardsMLFirm,
	cardsMLIndustries,
	cardsMLService,
	cardsMLSolution,
	cardsMLTable,
	imageMLEnterprise,
	imgMLSolution,
	imgMLTechno,
	listMLTechnoList,
	textMLEnterprise,
	textMLIndustries,
	textMLService,
	textMLSolution,
	textMLTable,
	textMLTechno,
	titleMLEnterprise,
	titleMLFirm,
	titleMLIndustries,
	titleMLService,
	titleMLSolution,
	titleMLTable,
	titleMLTechno,
} from '../../db/ML/ml-data.db'
import transition from '../../pageTransition'

const ML = () => {
	return (
		<CustomScroll>
			<div className={blockchainStyle.page__blockchain}>
				<Header />
				<MLHeader
					title={titleMLEnterprise}
					styles={styles}
					text={textMLEnterprise}
					image={imageMLEnterprise}
				/>
				<main className={styles.ml_main}>
					<MLService
						title={titleMLService}
						text={textMLService}
						cards={cardsMLService}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<MLIndustries
						title={titleMLIndustries}
						text={textMLIndustries}
						cards={cardsMLIndustries}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<MLSolutions
						title={titleMLSolution}
						text={textMLSolution}
						image={imgMLSolution}
						cards={cardsMLSolution}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<MLTable
						title={titleMLTable}
						text={textMLTable}
						cards={cardsMLTable}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<Techno
						title={titleMLTechno}
						text={textMLTechno}
						list={listMLTechnoList}
						image={imgMLTechno}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<MLFirm
						title={titleMLFirm}
						cards={cardsMLFirm}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
				</main>
				<Footer />
			</div>
		</CustomScroll>
	)
}

export default transition(ML)
