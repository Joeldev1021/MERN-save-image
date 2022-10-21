import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/auth/AuthProvider';
import { PostProvider } from './context/post-image/PostProvider';
import App from './App';
import './index.css';
import { CmtProvider } from './context/comment/CmtProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AuthProvider>
			<PostProvider>
				<CmtProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</CmtProvider>
			</PostProvider>
		</AuthProvider>
	</React.StrictMode>
);
