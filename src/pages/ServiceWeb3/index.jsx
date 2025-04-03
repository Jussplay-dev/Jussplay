// Assets
import bg from '../../assets/blockchain/01.png'
// Styles
import blockchainStyle from '../Blockchain/blockchain.module.scss'
import styles from './service-web3.module.scss'
// Components
import { HeaderBlockchain } from '../../components/Blockchain/HeaderBlockchain'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { CustomScroll } from '../../components/scroll/CustomScroll'
import transition from '../../pageTransition'
// DB
import { Aspects } from '../../components/ServiceWeb3/Aspects/Aspects'
import { Attractive } from '../../components/ServiceWeb3/Attractive/Attractive'
import { Company } from '../../components/ServiceWeb3/Company/Company'
import { Engines } from '../../components/ServiceWeb3/Engines/Engines'
import { Future } from '../../components/ServiceWeb3/Future/Future'
import { Makes } from '../../components/ServiceWeb3/Makes/Makes'
import { Popular } from '../../components/ServiceWeb3/Popular/Popular'
import { Reality } from '../../components/ServiceWeb3/Reality/Reality'
import { Reliable } from '../../components/ServiceWeb3/Reliable/Reliable'
import { Revenue } from '../../components/ServiceWeb3/Revenue/Revenue'
import { ServiceBlockchain } from '../../components/ServiceWeb3/ServiceBlockchain/ServiceBlockchain'
import { TypesDevice } from '../../components/ServiceWeb3/TypesDevice/TypesDevice'
import {
	cardsAiWeb3Aspects,
	cardsAiWeb3Attractive,
	cardsAiWeb3Blockchain,
	cardsAiWeb3Company,
	cardsAiWeb3Engines,
	cardsAiWeb3Future,
	cardsAiWeb3Makes,
	cardsAiWeb3Popular,
	cardsAiWeb3Reliable,
	cardsAiWeb3Revenue,
	cardsTypesOfDevices,
	imageAiWeb3Reality,
	listAiWeb3Reality,
	textAiWeb3Attractive,
	textAiWeb3Company,
	textAiWeb3Engines,
	textAiWeb3Header,
	titleAiWeb3Aspects,
	titleAiWeb3Attractive,
	titleAiWeb3Blockchain,
	titleAiWeb3Company,
	titleAiWeb3Engines,
	titleAiWeb3Future,
	titleAIWeb3Header,
	titleAiWeb3Makes,
	titleAiWeb3Popular,
	titleAiWeb3Reality,
	titleAiWeb3Reliable,
	titleAiWeb3Revenue,
	titleTypesOfDevices,
} from '../../db/service-web3/service-web3.data'

const ServiceWeb3 = () => {
	return (
		<CustomScroll>
			<div className={blockchainStyle.page__blockchain}>
				<Header />
				<HeaderBlockchain
					title={titleAIWeb3Header}
					subtitle={textAiWeb3Header}
				/>
				<img src={bg} alt='bg-header' className={blockchainStyle.bgImg} />
				<main className={styles.serviceWeb3_main}>
					<TypesDevice
						title={titleTypesOfDevices}
						cards={cardsTypesOfDevices}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<Engines
						title={titleAiWeb3Engines}
						text={textAiWeb3Engines}
						styles={styles}
						blockchainStyle={blockchainStyle}
						cards={cardsAiWeb3Engines}
					/>
					<Attractive
						title={titleAiWeb3Attractive}
						text={textAiWeb3Attractive}
						cards={cardsAiWeb3Attractive}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<Popular
						title={titleAiWeb3Popular}
						cards={cardsAiWeb3Popular}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<Revenue
						title={titleAiWeb3Revenue}
						cards={cardsAiWeb3Revenue}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<Future
						title={titleAiWeb3Future}
						cards={cardsAiWeb3Future}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<Aspects
						title={titleAiWeb3Aspects}
						cards={cardsAiWeb3Aspects}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<Company
						title={titleAiWeb3Company}
						text={textAiWeb3Company}
						cards={cardsAiWeb3Company}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<ServiceBlockchain
						title={titleAiWeb3Blockchain}
						cards={cardsAiWeb3Blockchain}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<Reliable
						title={titleAiWeb3Reliable}
						cards={cardsAiWeb3Reliable}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<Reality
						title={titleAiWeb3Reality}
						list={listAiWeb3Reality}
						bgImage={imageAiWeb3Reality}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<Makes
						title={titleAiWeb3Makes}
						cards={cardsAiWeb3Makes}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
				</main>
				<Footer />
			</div>
		</CustomScroll>
	)
}

export default transition(ServiceWeb3)
