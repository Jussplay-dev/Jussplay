import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from './providers/RouterProvider'

import './index.scss'
import { SoundProvider } from './providers/soundContext'

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
		<SoundProvider>
			<BrowserRouter />
		</SoundProvider>
	</StrictMode>
)
