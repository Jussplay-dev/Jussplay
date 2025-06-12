/* eslint-disable react/prop-types */
import { TitleDifferentPage } from '../../shared/ui/TitleDifferentPage'
import { Container } from '../../shared/ui/WrapperContainer'

export const ServiceAbout = ({ styles }) => {
	return (
		<section className={styles.service_about}>
			<TitleDifferentPage
				title={'CES'}
				style={styles.title_different_service_page}
			/>
			<TitleDifferentPage
				title={'SERV'}
				style={styles.title_different_service_scend_page}
			/>
			<Container>
				<div className={styles.service_wrapper_min_ellipse}>
					<div className={styles.service_subtitle}>
						<h2>
							Разрабатываем цифровые продукты с продуманным дизайном, технически
							сложным функционалом и внешними интеграциями. Сочетаем
							компетенции, опыт и технологии для создания эффективных
							IT-решений.
						</h2>
					</div>
					<div className={styles.service_min_ellipse}></div>
					<div className={styles.service_about_achievement_row}>
						<div className={styles.service_about_achievement_item}>
							<h3>90</h3>
							<h4>Клиентов работают с нами более 3-х лет</h4>
						</div>
						<div className={styles.service_about_achievement_item}>
							<h3>200</h3>
							<h4>Проектов разработанно</h4>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
