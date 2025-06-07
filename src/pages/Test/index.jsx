import { CustomScroll } from '../../components/scroll/CustomScroll'
import transition from '../../pageTransition'
import { ExperimentalScrollSection } from '../../shared/ui/ExperimentalScrollSection'
import { ExperimentalSection } from '../../shared/ui/ExperimentalSection'
import { Container, WrapperPage } from '../../shared/ui/WrapperContainer'
import { TitleBlockchain } from '../Blockchain/TitleBlockchain'

const ExperimentalPage = () => {
	return (
		<CustomScroll>
			<WrapperPage>
				<section style={{ marginBottom: 140 }}>
					<Container>
						<div style={{ padding: 30 }}>
							<TitleBlockchain title={'Test page for 3D model cube'} />
						</div>
					</Container>
					<ExperimentalSection />
					<ExperimentalScrollSection />
				</section>
			</WrapperPage>
		</CustomScroll>
	)
}

export default transition(ExperimentalPage)
