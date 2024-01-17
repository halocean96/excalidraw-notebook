import { Box, Container, Flex } from '@radix-ui/themes';
import { Excalidraw, MainMenu } from '@excalidraw/excalidraw';
import { throttle } from 'radash';
import { useNoteStore } from './store';
import View from './View';
import { useCallback } from 'react';
import { isMobile } from './utils';
import CreateDialogButton from './components/CreateDialogButton';

function App() {
	const { setExcalidrawAPI, onNoteChange, noteList, currentId, addNote } =
		useNoteStore((state) => ({
			setExcalidrawAPI: state.setExcalidrawApi,
			onNoteChange: state.onNoteChange,
			noteList: state.noteList,
			currentId: state.currentId,
			addNote: state.addNote
		}));
	const onChangeThrottle = useCallback(
		throttle({ interval: 500 }, onNoteChange),
		[onNoteChange]
	);
	const isNoteExist = noteList.some((note) => note.id === currentId);
	const initialElements =
		noteList.find((note) => note.id === currentId)?.data ?? [];
	return (
		<Flex direction={'row'} className="w-screen h-full overflow-hidden">
			<Box className="grow max-w-64 hidden lg:block">
				<View />
			</Box>
			<Flex justify={'center'} align={'center'} grow={'1'}>
				{isNoteExist ? (
					<Excalidraw
						onChange={onChangeThrottle}
						excalidrawAPI={(api) => setExcalidrawAPI(api)}
						initialData={{ elements: initialElements }}
					>
						{isMobile() ? (
							<MainMenu>
								<View />
							</MainMenu>
						) : null}
					</Excalidraw>
				) : (
					<Flex justify={'center'} align={'center'}>
						<Container className="max-w-44 lg:hidden">
							<CreateDialogButton createNote={addNote} />
						</Container>
					</Flex>
				)}
			</Flex>
		</Flex>
	);
}

export default App;
