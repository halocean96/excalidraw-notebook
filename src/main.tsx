import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Theme } from '@radix-ui/themes';
import './index.css';
import '@radix-ui/themes/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Theme className="h-full" accentColor="violet" grayColor="sand">
			<App />
		</Theme>
	</React.StrictMode>
);
