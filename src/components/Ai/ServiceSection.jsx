import CountUp from 'react-countup'
import { IoIosArrowForward } from 'react-icons/io'
import { useInView } from 'react-intersection-observer'
import img11 from '../../assets/Ai/img11.jpg'
import img12 from '../../assets/Ai/img12.jpg'
import img14 from '../../assets/Ai/img14.jpg'
import img15 from '../../assets/Ai/img15.jpg'
import img16 from '../../assets/Ai/img16.jpg'
import img17 from '../../assets/Ai/img17.jpg'
import img18 from '../../assets/Ai/img18.jpg'
import img19 from '../../assets/Ai/img19.jpg'
import img27 from '../../assets/Ai/img27.jpg'
import robot from '../../assets/Ai/pic29.jpg'
import page6 from '../../assets/blockchain6/page6.png'
import styles from './ServiceSection.module.scss'

const statsData = [
	{
		end: 50,
		suffix: '+',
		description: 'AI Project Delivered',
		duration: 3,
	},
	{
		end: 100,
		suffix: '+',
		description: 'Global Clients',
		duration: 3.5,
	},
	{ end: 150, suffix: '+', description: 'Developer Team', duration: 2.5 },
	{ end: 15, suffix: '', description: 'IYears in Service', duration: 2 },
]
const marketPlaceCards = [
	{
		pic: img27,
		title: 'AI powered process automation',
		description:
			'Automate your business by getting rid of manual work. Automation is way faster and it increases operational efficiency.',
	},
	{
		pic: img12,
		title: 'Image recognition and AI vision',
		description:
			'Utilize power of AI for advanced image processing, detection of objects and image/facial recognition.',
	},
	{
		pic: img11,
		title: 'AI for cybersecurity',
		description:
			'Protect your sensitive information from fraud, security breaches and losses with help of AI fraud prevention systems such as detection of threats, advanced authentication.',
	},
	{
		pic: img14,
		title: 'AI powered video generator',
		description:
			'Generate creative videos with AI powered video generator. It can be videos for personal interest or for business purposes, you can rely on AI to generate videos of unseen creativity, colors and precision!',
	},
	{
		pic: img15,
		title: 'AI assistant in software development',
		description:
			'Let virtual assistant to stand by your side 24/7! AI assistant is a great tool for coders and software developers where it can optimize the code, improve debugging and assist in early bug detection.',
	},
	{
		pic: img16,
		title: 'AI for data gathering & analytics',
		description:
			'Make the most value our of your raw data by turning them into actionable strategies. Enhance your decision making with AI assistant in analytics and data gathering. Automate your data collection as success comes through fast made decisions!',
	},
	{
		pic: img17,
		title: 'AI powered mobile applications',
		description:
			'Utilize power of AI and bring your mobile applications to the next level! Stay one step ahead with apps designed for growth and innovation where high performance and flexibility is guaranteed!',
	},
	{
		pic: img18,
		title: 'AI for predictive analytics',
		description:
			'Utilize power of AI to boost your sales through creating systems that is capable of predicting customer behavior! Through AI that uses machine learning algorithms, your business can adopt best strategies to target potential buyers.',
	},
	{
		pic: img19,
		title: 'AI for speech & Audio generation',
		description:
			'Generate stunning speeches or audio files through AI generator with advanced functions! Choose among various AI speakers with different voices, compose meaningful speeches and edit the audio in countless ways possible.',
	},
]

const ServiceSection = () => {
	const [statsRef, inView] = useInView({
		triggerOnce: true,
		threshold: 0.3,
	})

	const renderStats = () =>
		statsData.map((stat, index) => (
			<div className={styles.statItem} key={index}>
				<h2>
					{inView && (
						<CountUp
							start={0}
							end={stat.end}
							duration={stat.duration}
							separator=','
						/>
					)}
					{stat.suffix}
				</h2>
				<p>{stat.description}</p>
			</div>
		))

	return (
		<>
			<div className={styles.container}>
				<div className={styles.stats} ref={statsRef}>
					{renderStats()}
				</div>
				<section className={styles.infoSection}>
					<div className={styles.infoSection_content}>
						<h2>AI Software Development Services For Modern Business</h2>
						<p>
							We are a trusted NYC-based AI software development solutions
							provider that builds future-proof AI-based applications for your
							business. Our ingrained expertise in AI empowers us to deliver
							highly advanced AI solutions that solve real-world business
							problems. Our AI-powered software solutions enable modern
							businesses to automate processes and make businesses smarter.
							Propel your business on the path to success with our custom
							artificial intelligence development services tailored to your
							business needs.
						</p>
						<button className={styles.meetButton}>
							Meet with us <IoIosArrowForward />
						</button>
					</div>
					<div className={styles.infoSection_img}>
						<img src={robot} alt='Why Develop Android App' />
					</div>
				</section>
			</div>
			<div className={styles.marketplaceContainer}>
				<h2 className={styles.marketplaceTitle}>
					Artificial Intelligence Software Development Services We Provide
				</h2>
				<p>
					Our aim is to assist businesses across the globe to leverage
					innovative technologies like AI, machine learning and cybersecurity.
					We construct extremely sophisticated and high quality AI powered
					softwares that makes user tasks more simple and increase productivity
					of the businesses. If you are looking forward to integrate AI
					softwares into your business, then look no further! We will be glad to
					assist you with it!
				</p>
				<div className={styles.marketplaceCards}>
					{marketPlaceCards.map((card, index) => (
						<div key={index} className={styles.marketplaceCard}>
							<div className={styles.cardIcon}>
								<img src={card.pic} alt='' />
							</div>
							<h3 className={styles.cardTitle}>{card.title}</h3>
							<p className={styles.cardDescription}>{card.description}</p>
						</div>
					))}
				</div>
			</div>
			<section className={styles.bannerSection}>
				<div className={styles.container2}>
					<div className={styles.imageWrapper}>
						<img src={page6} className={styles.image} />
					</div>
					<div className={styles.content}>
						<h2 className={styles.title}>
							Boost your business's growth with our custom artificial
							intelligence solutions
						</h2>
						<p className={styles.description}>
							Schedule a free consultation appointment with us to discuss how
							our AI solutions can assist you in dominating the market!
						</p>
						{/* <ul className={styles.featuresList}>
							<li>Binance exchange clone</li>
							<li>Coinbase exchange clone</li>
						</ul> */}
						<button className={styles.meetButton}>
							Meet with us <IoIosArrowForward />
						</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default ServiceSection
