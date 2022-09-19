import CardList from './components/CardList';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import MyPost from './pages/MyPost';
import RegisterPage from './pages/auth/RegisterPage';
import Upload from './pages/Upload';
import ProfilePost from './pages/ProfilePost';
import Settings from './pages/Settings';
import EditePost from './pages/EditePost';

function App() {
	console.log('hola');
	return (
		<>
			<Header />
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/my-post" element={<MyPost />} />
				<Route path="/post/:id" element={<ProfilePost />} />
				<Route path="/post/edite/:id" element={<EditePost />} />
				<Route path="/upload" element={<Upload />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/" element={<CardList />} />
			</Routes>
		</>
	);
}

export default App;
