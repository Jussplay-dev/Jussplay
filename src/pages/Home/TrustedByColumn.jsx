/* eslint-disable react/prop-types */

import { useMemo } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const TrustedByColumnMobile = ({ styles, data }) => {
	const autoplayDelay = useMemo(
		() => Math.floor(200 + Math.random() * 1800),
		[]
	)
	return (
		<Swiper
			modules={[Autoplay]}
			direction='vertical'
			slidesPerView={1}
			autoHeight={false}
			allowTouchMove={false}
			autoplay={{
				delay: autoplayDelay,
				disableOnInteraction: false,
			}}
			speed={5000}
			style={{ height: 160 }}
		>
			{data?.map(dataTrustedBy => (
				<SwiperSlide key={dataTrustedBy.id}>
					<div
						className={
							styles.trusted_by_column_mobile_vertical_slider_container
						}
					>
						<img src={dataTrustedBy.image} alt={dataTrustedBy.image} />
					</div>
				</SwiperSlide>
			))}
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
