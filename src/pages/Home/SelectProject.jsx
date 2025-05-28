import WorkTab from '../../components/WorkTab'
import { workTabs } from '../../constants/home'
import { Container } from '../../shared/ui/WrapperContainer'
import styles from './new-home.module.scss'

export const SelectProject = () => {
	return (
		<section className={styles.select_project}>
			<Container>
				<h2 className={styles.select_project_title}>Select project</h2>
				<div>
					{workTabs.map(wt => (
						<WorkTab
							key={wt.id}
							name={wt.name}
							order={wt.id}
							type={wt.type}
							isTop={wt.isTop}
							isBottom={wt.isBottom}
							img={wt.img}
						/>
					))}
				</div>
			</Container>
		</section>
	)
}
