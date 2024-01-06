import { useState } from 'react';
import { Flex } from '@radix-ui/themes';
import { Excalidraw } from '@excalidraw/excalidraw';
import { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types';

function App() {
	const [excalidrawAPI, setExcalidrawAPI] =
		useState<ExcalidrawImperativeAPI>();

	return (
		<Flex direction={'row'} className="w-screen h-screen">
			<Excalidraw excalidrawAPI={(api) => setExcalidrawAPI(api)} />
		</Flex>
	);
}

export default App;
