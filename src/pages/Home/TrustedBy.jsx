import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { trustedByData } from '../../constants/home'
import { Container } from '../../shared/ui/WrapperContainer'
import styles from './new-home.module.scss'
import { TrustedByColumn } from './TrustedByColumn'

const TrustedByTestSlider = ({ title }) => {
	return (
		<Swiper
			direction='vertical'
			slidesPerView={1}
			autoHeight={false}
			loop={true}
			speed={4000}
			style={{ height: 100 }}
		>
			<SwiperSlide>
				<h1>{title}</h1>
			</SwiperSlide>
			<SwiperSlide>
				<h1>{title}</h1>
			</SwiperSlide>
			<SwiperSlide>
				<h1>{title}</h1>
			</SwiperSlide>
			<SwiperSlide>
				<h1>{title}</h1>
			</SwiperSlide>
		</Swiper>
	)
}

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
					{/* <TrustedByColumnMobile style={styles} /> */}
					<Swiper
						speed={3000}
						loop={true}
						slidesPerView={2.5}
						spaceBetween={30}
					>
						<SwiperSlide>
							<TrustedByTestSlider title={'test 1'} />
						</SwiperSlide>
						<SwiperSlide>
							<TrustedByTestSlider title={'test 2'} />
						</SwiperSlide>
						<SwiperSlide>
							<TrustedByTestSlider title={'test 3'} />
						</SwiperSlide>
						<SwiperSlide>
							<TrustedByTestSlider title={'test 4'} />
						</SwiperSlide>
					</Swiper>
				</div>
			</Container>
		</section>
	)
}
