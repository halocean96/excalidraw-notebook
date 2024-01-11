import { Button, Container, Flex } from '@radix-ui/themes';
import { useNoteStore } from './store';
import Note from './components/Note';
import Divider from './components/Divider';

function View() {
	const {
		addNote,
		noteList,
		selectNote,
		removeNote,
		editNoteTitle,
		currentId
	} = useNoteStore((state) => ({
		addNote: state.addNote,
		noteList: state.noteList,
		selectNote: state.selectNote,
		removeNote: state.removeNote,
		editNoteTitle: state.editNoteTitle,
		currentId: state.currentId
	}));
	return (
		<Flex direction={'column'} px={'2'}>
			<Container grow={'0'} py="2">
				<Button className="w-full" onClick={() => addNote('new')}>
					New
				</Button>
			</Container>
			<Divider />
			<Flex
				direction={'column'}
				py={'4'}
				gap={'2'}
				grow={'1'}
				justify={'start'}
			>
				{noteList.map((note) => (
					<Note
						key={note.id}
						title={note.title}
						onSelect={() => selectNote(note.id)}
						onRemove={() => removeNote(note.id)}
						onEditTitle={(title) => editNoteTitle(note.id, title)}
						isCurrent={note.id === currentId}
					/>
				))}
			</Flex>
		</Flex>
	);
}

export default View;
