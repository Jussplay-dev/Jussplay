/* eslint-disable no-unused-vars */
// Styles
import blockchainStyle from '../Blockchain/blockchain.module.scss'
import styles from './copywriting.module.scss'
// Components
import { TitleAi } from '../../components/AiBlockchain/ui/TitleAi'
import { BDBring } from '../../components/BIgData/BDBring/BDBring'
import { CopywritingIndustry } from '../../components/Copywriting/Industry/CopywritingIndustry'
import { CopywritingNeedIT } from '../../components/Copywriting/NeedIT/CopywritingNeedIT'
import { CopywritingSeo } from '../../components/Copywriting/SEO/CopywritingSeo'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { HeaderMotion } from '../../components/Motion/HeaderMotion/HeaderMotion'
import { CustomScroll } from '../../components/scroll/CustomScroll'
import { GDAppAchievements } from '../../components/Service_2/IosLeoders/IosAppAchievements'
import {
	cardsCopyWritingNeedIT,
	cardsCopyWritingPartner,
	cardsCopyWritingSeo,
	cardsCopyWritingSolution,
	imageCopyWritingHeader,
	listCopyWritingIndustryLeft,
	listCopyWritingIndustryRight,
	textCopyWritingHeader,
	titleCopyWritingHeader,
	titleCopyWritingIndustry,
	titleCopyWritingNeedIT,
	titleCopyWritingPartner,
	titleCopyWritingSeo,
	titleCopyWritingSolution,
} from '../../db/GD/copywriting.db'
import transition from '../../pageTransition'
import { WrapperContainer } from '../../shared/ui/WrapperContainer'

const Copywriting = () => {
	return (
		<CustomScroll>
			<div className={blockchainStyle.page__blockchain}>
				<Header />
				<HeaderMotion
					title={titleCopyWritingHeader}
					text={textCopyWritingHeader}
					image={imageCopyWritingHeader}
					styles={styles}
					blockchainStyle={blockchainStyle}
				/>
				<main className={styles.copywriting_main}>
					<GDAppAchievements />
					<CopywritingSeo
						title={titleCopyWritingSeo}
						cards={cardsCopyWritingSeo}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<CopywritingNeedIT
						title={titleCopyWritingNeedIT}
						cards={cardsCopyWritingNeedIT}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<CopywritingIndustry
						title={titleCopyWritingIndustry}
						listLeft={listCopyWritingIndustryLeft}
						listRight={listCopyWritingIndustryRight}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<WrapperContainer
						styles={styles.copywriting_section}
						blockchainStyle={blockchainStyle}
					>
						<TitleAi
							title={titleCopyWritingSolution}
							isCenter={true}
							text={false}
							styles={styles}
						/>
						<div className={styles.copywriting_solution_row}>
							{cardsCopyWritingSolution.map(({ id, title, image }) => (
								<div key={id} className={styles.copywriting_solution_card}>
									<img src={image} alt={title} />
									<h1>{title}</h1>
								</div>
							))}
						</div>
					</WrapperContainer>
					<BDBring
						title={titleCopyWritingPartner}
						cards={cardsCopyWritingPartner}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
				</main>
				<Footer />
			</div>
		</CustomScroll>
	)
}

export default transition(Copywriting)
