/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import {
	createBrowserRouter,
	RouterProvider,
	useRouteError,
} from 'react-router-dom'
import { NotFoundPage } from '../pages/Error/NotFoundPage'
// import Service from '../pages/Service'
import { Link } from 'react-router-dom'
import { RootLayout } from '../App'
import { CustomCursor } from '../components/cursor'
import { CustomScroll } from '../components/scroll/CustomScroll'
import { pages } from '../constants/pages.jsx'
import stylesError from '../pages/Error/errorPage.module.scss'

const BubbleError = () => {
	const error = useRouteError()
	console.error(error)
	return (
		<CustomScroll>
			<CustomCursor />
			<div className={stylesError.page__error}>
				<div className={stylesError.page__content}>
					<h1 className={stylesError.page__error_title}>Error Page</h1>
					<p>
						Return to{' '}
						<Link to='/home'>
							<span className='text-blue-500 hover:underline'>Home</span>
						</Link>
					</p>
				</div>
			</div>
		</CustomScroll>
	)
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <BubbleError />,
		children: [
			{
				element: <pages.Loader />,
			},
			{
				path: 'home',
				element: <pages.Home />,
			},
			{
				path: 'contact-us',
				element: <pages.ContactUs />,
			},
			{
				path: 'career',
				element: <pages.Career />,
			},
			{
				path: 'about-us',
				element: <pages.About />,
			},
			{
				path: 'service',
				element: <pages.Service />,
			},
			{
				path: 'blockchain',
				element: <pages.Blockchain />,
			},
			{
				path: 'nft-token-development',
				element: <pages.Token />,
			},
			{
				path: 'metaverse',
				element: <pages.Metaverse />,
			},
			{
				path: 'web3-game-development',
				element: <pages.Blockchain4 />,
			},
			{
				path: 'crypto-exchange-software-development',
				element: <pages.Blockchain6 />,
			},
			{
				path: 'web3',
				element: <pages.Web3 />,
			},
			{
				path: 'android-app-development-company',
				element: <pages.Service1 />,
			},
			{
				path: 'service-ios',
				element: <pages.ServiceIos />,
			},
			{
				path: 'wallet',
				element: <pages.Wallet />,
			},
			{
				path: 'web-app',
				element: <pages.WebApp />,
			},
			{
				path: 'service-chatbot',
				element: <pages.ChatBot />,
			},
			{
				path: 'ai-service',
				element: <pages.Ai />,
			},
			{
				path: 'ai-blockchain-wallet',
				element: <pages.AiBlockchain />,
			},
			{
				path: 'service-web3',
				element: <pages.ServiceWeb3 />,
			},
			{
				path: 'ml',
				element: <pages.ML />,
			},
			{
				path: 'big-data',
				element: <pages.BD />,
			},
			{
				path: 'gd',
				element: <pages.GD />,
			},
			{
				path: 'motion',
				element: <pages.Motion />,
			},
			{
				path: 'ui-ux',
				element: <pages.UiUx />,
			},
			{
				path: 'copywriting',
				element: <pages.Copywriting />,
			},
			{
				path: 'test-page',
				element: <pages.ExperimentalPage3D />,
			},
			{
				path: '*',
				element: <NotFoundPage />,
			},
		],
	},
])

export const BrowserRouter = () => {
	return <RouterProvider router={router} />
}
