/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import {
	listBDTextFinalLaunchProcessFollow,
	listBDTextRequirementProcessFollow,
	listBDTextResearchProcessFollow,
	listBDTextResourcesProcessFollow,
	listBDTextTestingProcessFollow,
	listBDTitleFinalLaunchProcessFollow,
	listBDTitleRequirementProcessFollow,
	listBDTitleResearchProcessFollow,
	listBDTitleTestingProcessFollow,
} from '../../../db/BigData/big-data.db'
import { CardProcessFlow } from '../../Chatbot/ProcessFlow/CardProcessFlow'

export const BDProcessList = ({ styles }) => {
	return (
		<div className={styles.process__flow_list_row}>
			<div className={styles.process__flow_list_item}>
				<CardProcessFlow
					styles={styles}
					title={listBDTitleRequirementProcessFollow}
					text={listBDTextRequirementProcessFollow}
				/>
				<CardProcessFlow
					styles={styles}
					title={listBDTextResearchProcessFollow}
					text={listBDTextResourcesProcessFollow}
				/>
				<CardProcessFlow
					styles={styles}
					title={listBDTitleFinalLaunchProcessFollow}
					text={listBDTextFinalLaunchProcessFollow}
				/>
			</div>
			<div className={styles.process__flow_list_item}>
				<CardProcessFlow
					styles={styles}
					title={listBDTitleResearchProcessFollow}
					text={listBDTextResearchProcessFollow}
				/>
				<CardProcessFlow
					styles={styles}
					title={listBDTitleTestingProcessFollow}
					text={listBDTextTestingProcessFollow}
				/>
			</div>
		</div>
	)
}
