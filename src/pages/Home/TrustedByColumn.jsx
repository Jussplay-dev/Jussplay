/* eslint-disable react/prop-types */
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { trustedByData } from '../../constants/home'

export const TrustedByColumnMobile = ({
	style,
	// isFirst,
	// isLast,
}) => {
	// const columnClasses = [style]

	// if (isFirst) {
	// 	columnClasses.push(style + '_item_first')
	// }

	// if (isLast) {
	// 	columnClasses.push(style + '_item_last')
	// }
	return (
		<div className={style.trusted_by_column_mobile}>
			<Swiper
				direction='vertical'
				modules={[Autoplay]}
				autoplay={{
					delay: 0,
					disableOnInteraction: false,
				}}
				speed={5000}
				loop={true}
				allowTouchMove={false}
				slidesPerView={1}
				spaceBetween={10}
			>
				{trustedByData.map(trustedMobile => (
					<SwiperSlide key={trustedMobile.id}>
						<div className={style.trusted_by_column_mobile_image}>
							<img src={trustedMobile.image} alt='trusted by' />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
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
