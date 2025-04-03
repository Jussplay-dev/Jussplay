// components/ServiceSection.jsx
import icon1 from '../../assets/Ai/icon1.png'
import icon2 from '../../assets/Ai/icon2.png'
import icon3 from '../../assets/Ai/icon3.png'
import icon4 from '../../assets/Ai/icon4.png'
import img1 from '../../assets/Ai/img1.jpg'
import img2 from '../../assets/Ai/img2.jpg'
import img3 from '../../assets/Ai/img3.jpg'
import img4 from '../../assets/Ai/img4.jpg'
import img5 from '../../assets/Ai/img5.jpg'
import img6 from '../../assets/Ai/img6.jpg'
import img7 from '../../assets/Ai/img7.jpg'
import img8 from '../../assets/Ai/img8.jpg'
import img9 from '../../assets/Ai/img9.jpg'
import styles from './DomainExpertise.module.scss'

const services = [
	{
		id: 1,
		title: 'Risk Mitigation',
		description:
			'Implementing our AI solutions will lower the risks through tasks automation, early error detection & correction, mitigate potential risks and assist in complex tasks handling.',
		icon: img1,
	},
	{
		id: 2,
		title: 'Personalized Customer',
		description:
			'Generate effective and personalized customer offers, recommendations and discounts through AI data analysis of your customer raw data.',
		icon: img2,
	},
	{
		id: 3,
		title: 'Forecasting ',
		description:
			'Utilize power of our AI enhanced with (ML/NLP/deep learn) to accurately forecast future trends through analyzing customer behavior and patterns.',
		icon: img3,
	},
	{
		id: 4,
		title: 'Better Data Management',
		description:
			'Manage your data effectively with our AI solutions that assists your business in data entry, storing, analyzing, managing and driving meaningful business outcomes.',
		icon: img4,
	},
	{
		id: 5,
		title: 'Gain Valuable Insights',
		description:
			'Gain valuable insights through AI driven analysis and evaluation of data that will significantly boost your business decision making!',
		icon: img5,
	},
	{
		id: 6,
		title: 'Enhance Efficiency',
		description:
			'Monitor your business related processes in real time with our AI solutions and improve impact of your business and its efficiency.',
		icon: img6,
	},
	{
		id: 7,
		title: 'Automate Repetitive Tasks',
		description:
			'Benefit from our AI handling complex & repetitive tasks of your business. Cut unnecessary costs and save time for what truly matters for your business!',
		icon: img7,
	},
	{
		id: 8,
		title: 'Unbiased Decisions',
		description:
			'Our AI softwares are not driven by emotions. Therefore, you can trust our AI when it comes to unbiased decisions to ensure neutral and accurate responses',
		icon: img8,
	},
	{
		id: 9,
		title: 'New Inventions',
		description:
			'Enjoy extreme creativity of our AI! Businesses can enjoy unexpected discoveries that our AI can unveil!',
		icon: img9,
	},
]

const reasons = [
	{
		title: 'Extensive Knowledge',
		description:
			'Highly skilled team members with extensive knowledge/experience in software development.',
		img: icon1,
	},
	{
		title: 'Privacy',
		description:
			'As a reliable software development company, we make sure to keep your privacy by signing a non-disclosure agreement to assure our clients that we never reveal any project-related information.',
		img: icon2,
	},
	{
		title: '100% satisfaction or refund',
		description:
			'We deliver top notch projects that perfectly aligns with all your requirements. It’s 100% satisfaction by customers or we will provide 100% refund!',
		img: icon3,
	},
	{
		title: '24*7 Support',
		description:
			'Post project maintenance and support available 24/7. Our support team is ready to assist our customers on any matter.',
		img: icon4,
	},
]

const DomainExpertise = () => {
	return (
		<>
			<section className={styles['service-section']}>
				<h2>Benefits your business gets from implementing our AI software</h2>
				<p>
					As a reputable AI software development company, we design custom AI
					solutions for our clients in various business domains. Implementing AI
					business solutions offer myriad of benefits for businesses that
					include;
				</p>
				<div className={styles['service-section__cards']}>
					{services.map(service => (
						<div key={service.id} className={styles['service-card']}>
							<img
								src={service.icon}
								alt={service.title}
								className={styles['service-card__icon']}
							/>
							<h3 className={styles['service-card__title']}>{service.title}</h3>
							<p className={styles['service-card__description']}>
								{service.description}
							</p>
						</div>
					))}
				</div>
			</section>
			<div className={styles.whyUsContainer}>
				<h2 className={styles.title}>
					What makes us a reliable software development company?
				</h2>
				<p>
					Our main goal is satisfaction of our clients where we ensure on-time
					project delivery with quality that exceeds beyond expectation. We care
					a lot when it comes to post project matters where we ensure smooth
					support & maintenance of your AI project!
				</p>
				<div className={styles.reasonsGrid}>
					{reasons.map((reason, index) => (
						<div key={index} className={styles.reasonCard}>
							<img src={reason.img} alt='' />
							<h3 className={styles.cardTitle}>{reason.title}</h3>
							<p className={styles.cardDescription}>{reason.description}</p>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default DomainExpertise
