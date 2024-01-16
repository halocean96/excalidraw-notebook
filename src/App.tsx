import { Box, Flex } from '@radix-ui/themes';
import { Excalidraw, MainMenu } from '@excalidraw/excalidraw';
import { throttle } from 'radash';
import { useNoteStore } from './store';
import View from './View';
import { useCallback } from 'react';
import { isMobile } from './utils';

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
			<Box className="max-w-64 hidden lg:block">
				<View />
			</Box>
			<Flex justify={'center'} align={'center'} grow={'1'}>
				<Excalidraw
					onChange={onChangeThrottle}
					excalidrawAPI={(api) => setExcalidrawAPI(api)}
				>
					{isMobile() ? (
						<MainMenu>
							<View />
						</MainMenu>
					) : null}
				</Excalidraw>
			</Flex>
		</Flex>
	);
}

export default App;
