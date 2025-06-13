/* eslint-disable react/prop-types */
export const DetailsListAboutUS = ({ title, titleNumber, styles }) => {
	return (
		<div className={styles.about_us_approach_item_details_list}>
			<h3>{title ? title : 'Title about us approach list'}</h3>
			<h4>
				{titleNumber ? titleNumber : 'Title number about us approach list'}
			</h4>
		</div>
	)
}
