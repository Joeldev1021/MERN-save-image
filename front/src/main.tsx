import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/auth/AuthProvider';
import { PostProvider } from './context/post-image/PostProvider';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AuthProvider>
			<PostProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</PostProvider>
		</AuthProvider>
	</React.StrictMode>
);
