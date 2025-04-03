// Styles
import blockchainStyle from '../Blockchain/blockchain.module.scss'
import styles from './ai-blockchain.module.scss'
// Components
import { AiNftPlatform } from '../../components/AiBlockchain/AiNftPlatform/AiNftPlatform'
import { InvestHiring } from '../../components/AiBlockchain/InvestHiring/InvestHiring'
import { ModernTime } from '../../components/AiBlockchain/ModernTime/ModernTime'
import { PerfectionistsDelivering } from '../../components/AiBlockchain/PerfectionistsDelivering/PerfectionistsDelivering'
import { ReadyMade } from '../../components/AiBlockchain/ReadyMade/ReadyMade'
import { SmartContract } from '../../components/AiBlockchain/SmartContract/SmartContract'
import { TakeTheLead } from '../../components/AiBlockchain/TakeTheLead/TakeTheLead'
import { TradingFeatures } from '../../components/AiBlockchain/TradingFeatures/TradingFeatures'
import { HeaderAiBlockchain } from '../../components/AiBlockchain/ui/HeaderAiBlockchain'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { CustomScroll } from '../../components/scroll/CustomScroll'
import {
	cardsCCHighSecurity,
	cardsCCInvestHiring,
	cardsCCModernTime,
	cardsCCMultiple,
	cardsCCMultipleBody,
	cardsCCNftPlatforms,
	cardsCCPerfectionists,
	cardsCCProcess,
	cardsCCSmartContract,
	cardsCCTakeLead,
	cardsCCTradingFeatures,
	imageCCTradingFeatures,
	imageLinesCCProcess,
	imgCCReadyMade,
	listCCRisingMaxLeft,
	listCCRisingMaxRight,
	subCardsCCProcess,
	textCCHighSecurity,
	textCCInvestHiring,
	textCCModernTime,
	textCCNftPlatforms,
	textCCPerfectionists,
	textCCProcess,
	textCCReadyMade,
	textCCSmartContract,
	textCCTakeLead,
	textCCTradingFeatures,
	textHeaderCC,
	titleCCHighSecurity,
	titleCCInvestHiring,
	titleCCModernTime,
	titleCCMultiple,
	titleCCNftPlatforms,
	titleCCPerfectionists,
	titleCCProcess,
	titleCCReadyMade,
	titleCCRisingMax,
	titleCCSmartContract,
	titleCCTakeLead,
	titleCCTradingFeatures,
	titleHeaderCC,
} from '../../db/cryptocurrency-exchange/data'
import transition from '../../pageTransition'
// Assets
import bg from '../../assets/cryptocurrency-exchange/header-page/bg.png'
import { HighSecurity } from '../../components/AiBlockchain/HighSecurity/HighSecurity'
import { Multiple } from '../../components/AiBlockchain/MultipleAndProcess/Multiple'
import { Process } from '../../components/AiBlockchain/MultipleAndProcess/Process'
import { RisingMax } from '../../components/AiBlockchain/RisingMax/RisingMax'

const AiBlockchain = () => {
	return (
		<CustomScroll>
			<div className={blockchainStyle.page__blockchain}>
				<Header />
				<HeaderAiBlockchain
					title={titleHeaderCC}
					text={textHeaderCC}
					styles={styles}
					stylesBlockchain={blockchainStyle}
					image={bg}
				/>
				<main className={styles.aiBlockchain_main}>
					<TakeTheLead
						title={titleCCTakeLead}
						text={textCCTakeLead}
						cards={cardsCCTakeLead}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<ReadyMade
						title={titleCCReadyMade}
						text={textCCReadyMade}
						image={imgCCReadyMade}
						styles={styles}
					/>
					<AiNftPlatform
						title={titleCCNftPlatforms}
						text={textCCNftPlatforms}
						cards={cardsCCNftPlatforms}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<PerfectionistsDelivering
						title={titleCCPerfectionists}
						text={textCCPerfectionists}
						cards={cardsCCPerfectionists}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<ModernTime
						title={titleCCModernTime}
						text={textCCModernTime}
						cards={cardsCCModernTime}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<InvestHiring
						title={titleCCInvestHiring}
						text={textCCInvestHiring}
						cards={cardsCCInvestHiring}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<SmartContract
						title={titleCCSmartContract}
						text={textCCSmartContract}
						cards={cardsCCSmartContract}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<TradingFeatures
						title={titleCCTradingFeatures}
						text={textCCTradingFeatures}
						cards={cardsCCTradingFeatures}
						image={imageCCTradingFeatures}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<HighSecurity
						title={titleCCHighSecurity}
						text={textCCHighSecurity}
						cards={cardsCCHighSecurity}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<Multiple
						title={titleCCMultiple}
						cardsTop={cardsCCMultiple}
						cardsBody={cardsCCMultipleBody}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<Process
						title={titleCCProcess}
						text={textCCProcess}
						image={imageLinesCCProcess}
						cardsTop={cardsCCProcess}
						cardsBody={subCardsCCProcess}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<RisingMax
						title={titleCCRisingMax}
						listOne={listCCRisingMaxLeft}
						listTwo={listCCRisingMaxRight}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
				</main>
				<Footer />
			</div>
		</CustomScroll>
	)
}

export default transition(AiBlockchain)
