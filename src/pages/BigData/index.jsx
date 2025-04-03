// Assets
import bg from '../../assets/oval.png'
// Styles
import blockchainStyle from '../Blockchain/blockchain.module.scss'
import styles from './big-data.module.scss'
// Components
import { BDBenefits } from '../../components/BIgData/BDBenefits/BDBenefits'
import { BDBring } from '../../components/BIgData/BDBring/BDBring'
import { BDExpertise } from '../../components/BIgData/BDExpertise/BDExpertise'
import { BDProcess } from '../../components/BIgData/BDProcess/BDProcess'
import { BDSpectrum } from '../../components/BIgData/BDSpectrum/BDSpectrum'
import { HeaderServicePages } from '../../components/commonService/HeaderServicePages'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { CustomScroll } from '../../components/scroll/CustomScroll'
import { Reliable } from '../../components/ServiceWeb3/Reliable/Reliable'
import { imageProcessFollow } from '../../components/Util/Service/ChatBot/data'
import {
	cardsBDBenefits,
	cardsBDExpertise,
	cardsBDexports,
	cardsBDProvider,
	cardsBDSpectrum,
	textAiBD,
	textBDBenefits,
	textBDExpertise,
	textBDProcess,
	textDBSpectrum,
	titleAiBD,
	titleBDBenefits,
	titleBDExpertise,
	titleBDProcess,
	titleBDProvider,
	titleBDSpectrum,
} from '../../db/BigData/big-data.db'
import transition from '../../pageTransition'

const BigData = () => {
	return (
		<CustomScroll>
			<div className={blockchainStyle.page__blockchain}>
				<Header />
				<HeaderServicePages image={bg} title={titleAiBD} text={textAiBD} />
				<main className={styles.big_data_main}>
					<BDSpectrum
						title={titleBDSpectrum}
						text={textDBSpectrum}
						cards={cardsBDSpectrum}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<BDExpertise
						title={titleBDExpertise}
						text={textBDExpertise}
						cards={cardsBDExpertise}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<BDProcess
						title={titleBDProcess}
						text={textBDProcess}
						image={imageProcessFollow}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<BDBenefits
						title={titleBDBenefits}
						text={textBDBenefits}
						cards={cardsBDBenefits}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<Reliable
						title={titleBDProvider}
						cards={cardsBDProvider}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<BDBring
						title={titleBDExpertise}
						text={textBDExpertise}
						cards={cardsBDexports}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
				</main>
				<Footer />
			</div>
		</CustomScroll>
	)
}

export default transition(BigData)
