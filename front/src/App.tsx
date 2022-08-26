import CardList from './components/CardList';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/" element={<CardList />} />
			</Routes>
		</>
	);
}

export default App;
