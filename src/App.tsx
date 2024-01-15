import { Flex } from '@radix-ui/themes';
import { Excalidraw } from '@excalidraw/excalidraw';
import { throttle } from 'radash';
import { useNoteStore } from './store';
import View from './View';
import { useCallback } from 'react';

function App() {
	const { setExcalidrawAPI, onNoteChange } = useNoteStore((state) => ({
		setExcalidrawAPI: state.setExcalidrawApi,
		onNoteChange: state.onNoteChange
	}));

	const onChangeThrottle = useCallback(
		throttle({ interval: 500 }, onNoteChange),
		[onNoteChange]
	);
	return (
		<Flex direction={'row'} className="w-screen h-screen">
			<View />
			<Flex justify={'center'} align={'center'} grow={'1'}>
				<Excalidraw
					onChange={onChangeThrottle}
					excalidrawAPI={(api) => setExcalidrawAPI(api)}
				/>
			</Flex>
		</Flex>
	);
}

export default App;
