// import reactLogo from './assets/react.svg' // нужно удалить данные ресурсы
// import viteLogo from '/vite.svg'
import { TaskProvider } from "./entities/task/model/store"
import { DraftProvider } from "./entities/task/model/draftStore"
import { Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage/ui"
import { EditPage } from "./pages/EditPage/ui"


function App() {
	return (
		<TaskProvider>
			<DraftProvider>
				<Routes>
					<Route path="/" element={<HomePage/>}/>
					<Route path="/task/:id" element={<EditPage/>}/>
				</Routes>
			</DraftProvider>				
		</TaskProvider>
	)
}

export default App
