import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider, theme } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ConfigProvider>
	</StrictMode>,
)
