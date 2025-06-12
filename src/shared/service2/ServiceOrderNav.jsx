/* eslint-disable react/prop-types */

export const ServiceOrderNav = ({ styles, data }) => {
	return (
		<div className={styles.service_order_nav}>
			<ul>
				{data.map(orderItem => (
					<li key={orderItem.id}>{orderItem.title}</li>
				))}
			</ul>
		</div>
	)
}
