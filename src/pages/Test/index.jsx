import transition from '../../pageTransition'
import { ExperimentalSection } from '../../shared/ui/ExperimentalSection'
import { Container, WrapperPage } from '../../shared/ui/WrapperContainer'
import { TitleBlockchain } from '../Blockchain/TitleBlockchain'

const ExperimentalPage = () => {
	return (
		<WrapperPage>
			<section style={{ marginBottom: 140 }}>
				<Container>
					<div style={{ padding: 30 }}>
						<TitleBlockchain title={'Test page for 3D model cube'} />
					</div>
				</Container>
				<ExperimentalSection />
			</section>
		</WrapperPage>
	)
}

export default transition(ExperimentalPage)
