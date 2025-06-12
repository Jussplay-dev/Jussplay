/* eslint-disable react/prop-types */
export const ServiceOrderList = ({
	styles,
	title,
	subtitle,
	serviceListData,
}) => {
	return (
		<div className={styles.service_order_list}>
			<h1>{title ? title : 'Service-Title'}</h1>
			<h2>{subtitle ? subtitle : 'Service-Subtitle'}</h2>
			<div className={styles.service_order_list_items}>
				{serviceListData.map(serviceListItem => (
					<div
						key={serviceListItem.id}
						className={styles.service_order_list_sub_items_row}
					>
						<div className={styles.service_order_list_sub_item}>
							<h3>
								{serviceListItem.title
									? serviceListItem.title
									: 'service-item-title'}
							</h3>
							<p>
								{serviceListItem.text
									? serviceListItem.text
									: 'service-item-text'}
							</p>
						</div>
						<div className={styles.service_order_list_sub_item_price}>
							<h3>
								{serviceListItem.price
									? serviceListItem.price
									: 'service-item-price'}
							</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
