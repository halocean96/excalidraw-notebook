import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	define: {
		// excalidraw reffers to this variable to check if it's running in preact
		'process.env.IS_PREACT': JSON.stringify('false')
	}
});
