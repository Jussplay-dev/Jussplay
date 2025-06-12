/* eslint-disable react/prop-types */
import {
	serviceDataOrderList,
	serviceDataOrderNav,
} from '../../db/Service/service-data.db'
import { ServiceOrderList } from '../../shared/service2/ServiceOrderList'
import { ServiceOrderNav } from '../../shared/service2/ServiceOrderNav'
import { Container } from '../../shared/ui/WrapperContainer'

export const ServiceOrder = ({ styles }) => {
	return (
		<section className={styles.service_section_order}>
			<Container>
				<div className={styles.service_order_row}>
					<ServiceOrderNav styles={styles} data={serviceDataOrderNav} />
					<div>
						{serviceDataOrderList.map(serviceDataOrderListItem => (
							<ServiceOrderList
								key={serviceDataOrderListItem.id}
								title={serviceDataOrderListItem.title}
								subtitle={serviceDataOrderListItem.subTitle}
								serviceListData={serviceDataOrderListItem.list}
								styles={styles}
							/>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}
