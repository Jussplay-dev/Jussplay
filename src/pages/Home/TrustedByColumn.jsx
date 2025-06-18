/* eslint-disable react/prop-types */
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { trustedByData } from '../../constants/home'

export const TrustedByColumnMobile = ({ style }) => {
	return (
		<Swiper
			// modules={[Autoplay]}
			// autoplay={{
			// 	delay: 0,
			// 	disableOnInteraction: false,
			// }}
			speed={3000}
			loop={true}
			// allowTouchMove={false}
			slidesPerView={2.5}
			spaceBetween={30}
			autoHeight={false}
		>
			<SwiperSlide>
				<div
					className={style.trusted_by_column_mobile_vertical_slider_container}
				>
					<Swiper
						modules={[Autoplay]}
						direction='vertical'
						slidesPerView={1}
						autoHeight={false}
						loop={true}
						speed={4000}
						spaceBetween={30}
						autoplay={{
							delay: 0,
							disableOnInteraction: false,
						}}
						// allowTouchMove={false}
					>
						{trustedByData?.map(trustedMobile => (
							<SwiperSlide
								key={trustedMobile.id}
								className={style.trusted_by_column_mobile_vertical_slider_image}
							>
								<div className={style.trusted_by_column_mobile_vertical_image}>
									<img
										src={trustedMobile.image}
										alt={`slide-number-${trustedMobile.id}-image-${trustedMobile.image}`}
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div
					className={style.trusted_by_column_mobile_vertical_slider_container}
				>
					<Swiper
						modules={[Autoplay]}
						direction='vertical'
						slidesPerView={1}
						loop={true}
						speed={4000}
						autoHeight={false}
						autoplay={{
							delay: 0,
							disableOnInteraction: false,
						}}
						// allowTouchMove={false}
						spaceBetween={30}
					>
						{trustedByData?.map(trustedMobile => (
							<SwiperSlide key={trustedMobile.id} style={{ height: 160 }}>
								<div className={style.trusted_by_column_mobile_vertical_image}>
									<img
										src={trustedMobile.image}
										alt={`slide-number-${trustedMobile.id}-image-${trustedMobile.image}`}
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</SwiperSlide>
		</Swiper>
	)
}

export const TrustedByColumn = ({ style, image, isFirst, isLast }) => {
	const columnClasses = [style]

	if (isFirst) {
		columnClasses.push(style + '_item_first')
	}

	if (isLast) {
		columnClasses.push(style + '_item_last')
	}
	return (
		<div className={style}>
			<img src={image} alt='trusted by' />
		</div>
	)
}
