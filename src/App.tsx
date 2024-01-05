import { Flex } from '@radix-ui/themes';
import { Excalidraw } from '@excalidraw/excalidraw';

function App() {
	return (
		<Flex direction={'row'} className="h-screen">
			<Excalidraw />
		</Flex>
	);
}

export default App;
