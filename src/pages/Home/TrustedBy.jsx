import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { trustedByData } from '../../constants/home'
import { Container } from '../../shared/ui/WrapperContainer'
import styles from './new-home.module.scss'
import { TrustedByColumn, TrustedByColumnMobile } from './TrustedByColumn'

export const TrustedBy = () => {
	return (
		<section className={styles.section__trusted_by}>
			<Container>
				<h1 className={styles.trusted_by_title}>Trusted by</h1>
				<div className={styles.trusted_by_row}>
					{trustedByData.map(trustedBy => (
						<TrustedByColumn
							key={trustedBy.id}
							image={trustedBy.image}
							style={styles.trusted_by_column}
						/>
					))}
				</div>
				<div className={styles.trusted_by_row_mobile}>
					<Swiper
						speed={3000}
						loop={true}
						slidesPerView={2.5}
						spaceBetween={30}
						modules={[Autoplay]}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						autoHeight={false}
						allowTouchMove={false}
						style={{ height: 200 }}
					>
						{trustedByData.map(item => (
							<SwiperSlide key={`vert-${item.id}`}>
								<TrustedByColumnMobile styles={styles} data={trustedByData} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</Container>
		</section>
	)
}
