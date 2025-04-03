import { PiTriangleFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import styles from './dropdown.module.scss' // Assume you have appropriate CSS

// Import Icons Service
import ai_developmet from '../../assets/service/ai-development-icon.svg'
import android from '../../assets/service/android-icon.svg'
import ai from '../../assets/service/artificial-intelligence-icon.svg'
import bigdata from '../../assets/service/big-data-icon.svg'
import blockchain from '../../assets/service/blockchain-icon.svg'
import chatBot from '../../assets/service/chat-bot-development-icon.svg'
import cloud from '../../assets/service/cloud-consulting.svg'
import cms from '../../assets/service/cms-erp-icon.svg'
import ios from '../../assets/service/ios-icon.svg'
import machineLearn from '../../assets/service/machine-learning-icon.svg'
import progWeb from '../../assets/service/progressive-web-app-icon.svg'
// import python from '../../assets/service/python-icon.svg'
import reactNat from '../../assets/service/react-native-app-icon.svg'
import soft from '../../assets/service/software-development-icon.svg'
import staff from '../../assets/service/staff-augmentation-icon.svg'

export const DropdownServices = () => {
	return (
		<div className={styles.dropdown}>
			<div className={styles.dropdown__left}>
				<PiTriangleFill />
				<ul>
					<li>
						<div className={styles.dropdown__header}>
							<h4>
								Mobile App Development <br />
								<br />
							</h4>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={android} alt='' />
							</div>
							<div>
								<Link to={'/android-app-development-company'}>
									<h6>Anddroid App</h6>
									<p>Build native mobile apps for unmatched user experience.</p>
								</Link>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={ios} alt='' />
							</div>
							<div>
								<Link to={'/service-ios'}>
									<h6>Ios App App</h6>
									<p>
										Develop reliable and dynamic iOS Apps for iPhone &amp; iPad.
									</p>
								</Link>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={progWeb} alt='' />
							</div>
							<div>
								<Link to={'/web-app'}>
									<h6>Web app</h6>
									<p>Performance Near To Native App</p>
								</Link>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={cloud} alt='' />
							</div>
							<div>
								<Link to={'/service-web3'}>
									<h6>Service-web3</h6>
									<p>Web3 & NFT development company</p>
								</Link>
							</div>
						</div>
					</li>
					<li>
						<div className={styles.dropdown__header}>
							<h4>
								DataSince <br /> Blockchain
							</h4>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={blockchain} alt='' />
							</div>
							<div>
								<Link to={'/wallet'}>
									<h6>Multi Cryptocurrency Wallet</h6>
									<p>
										RisingMax Inc is a reliable NYC-based multi-cryptocurrency
										wallet development company.
									</p>
								</Link>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={ai} alt='' />
							</div>
							<div>
								<Link to={'/ai-service'}>
									<h6>Ai-service</h6>
									<p>Best AI Software Development Company</p>
								</Link>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={chatBot} alt='chatbot' />
							</div>
							<div>
								<Link to={'/service-chatbot'}>
									<h6>Chatbot</h6>
									<p>AI Chatbot Development Services We Offer</p>
								</Link>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={ai_developmet} alt='' />
							</div>
							<div>
								<Link to={'/ai-blockchain-wallet'}>
									<h6>Cryptocurrency Exchange Software Development</h6>
									<p>
										We are a cryptocurrency exchange software development
										company.
									</p>
								</Link>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={machineLearn} alt='' />
							</div>
							<div>
								<Link to={'/ml'}>
									<h6>Machine Learning</h6>
									<p>
										Creating Everything That Your Enterprise Needs With Machine
										Learning Software Development
									</p>
								</Link>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={bigdata} alt='' />
							</div>
							<div>
								<Link to={'/big-data'}>
									<h6>BIG DATA</h6>
									<p>Big Data Consulting & Development Services</p>
								</Link>
							</div>
						</div>
					</li>
					<li>
						<div className={styles.dropdown__header}>
							<h4>
								Design <br />
								<br />
							</h4>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={soft} alt='' />
							</div>
							<div>
								<Link to={'/gd'}>
									<h6>Graphic Design</h6>
									<p>
										Creating graphics solutions with absolute set of graphic
										designing services
									</p>
								</Link>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={cms} alt='' />
							</div>
							<div>
								<Link to='/motion'>
									<h6>Motion Design</h6>
									<p>
										Captivate your audience with Superside’s motion design
										services.
									</p>
								</Link>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={staff} alt='' />
							</div>
							<div>
								<Link to={'/ui-ux'}>
									<h6>UI/UX</h6>
									<p>
										Our company specializes in creation of unforgettable UI/UX.
									</p>
								</Link>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={reactNat} alt='' />
							</div>
							<div>
								<Link to={'/copywriting'}>
									<h6>Copywriting</h6>
									<p>
										Copywriting Services for Agencies, Businesses, and Ecommerce
									</p>
								</Link>
							</div>
						</div>
					</li>
				</ul>
				{/* <div className={styles.dropdown__leftBottom}>
					<div className={styles.dropdown__wrap}>
						<img src={qa} alt='' />
						<div>
							<h4>QA & Testing</h4>
							<p>
								End-to-end QA testing services to detect bugs and technical
								issues.
							</p>
						</div>
					</div>
					<div className={styles.dropdown__wrap}>
						<img src={web3} alt='' />
						<div>
							<h4>Web3 Testing</h4>
							<p>
								Test your web3 application to avoid app failure and enhance
								security.
							</p>
						</div>
					</div>
					<div className={styles.dropdown__wrap}>
						<img src={chainTest} alt='' />
						<div>
							<h4>Blockchain Testing</h4>
							<p>
								Functional, API, performance, node, security, and other testing
								services.
							</p>
						</div>
					</div>
				</div> */}
			</div>
			{/* <div className={styles.dropdown__right}>
				<ul>
					<li>
						<div className={styles.dropdown__header}>
							<h4>Technologies</h4>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={bigdata} alt='' />
							</div>
							<div>
								<h6>Big Data</h6>
								<p>
									Resolve complex data challenges and unlock your business
									value.
								</p>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={machineLearn} alt='' />
							</div>
							<div>
								<h6>Machine Learning</h6>
								<p>
									Scale up business &amp; tackle complex challenges with ML.
								</p>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={ai} alt='' />
							</div>
							<div>
								<h6>Artificial Intelligence</h6>
								<a href=''>Generative AI</a>
								<br />
								<a href=''>Computer Vision</a>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={blockchain} alt='' />
							</div>
							<div>
								<h6>Blockchain</h6>
								<p>Build dApps, smart contracts, crypto wallets.</p>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={python} alt='' />
							</div>
							<div>
								<h6>Python</h6>
								<p>Develop apps on Python frameworks like Flask, Web2py.</p>
							</div>
						</div>
					</li>
				</ul>
			</div> */}
		</div>
	)
}
