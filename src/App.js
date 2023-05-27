import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './scenes/home/index.jsx';
import Projects from './scenes/projects/index.jsx';

function App() {
	return (
		<div className="App bg-gray-50">
			<Navbar />

			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					{/* <Route path="/projects" element={<Projects />} /> */}
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
