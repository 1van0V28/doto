// import reactLogo from './assets/react.svg' // нужно удалить данные ресурсы
// import viteLogo from '/vite.svg'
import { TaskProvider } from "./entities/task/model/store"
import { HomePage } from "./pages/HomePage/ui"
import './App.css'

function App() {
	return (
		<>
			<TaskProvider>
				<HomePage/>
			</TaskProvider>
		</>
	)
}

export default App
