import { Box, Text, Flex } from '@radix-ui/themes';
import RemoveDialogButton from './RemoveDialogButton';
import EditDialogButton from './EditDialogButon';
type NoteProps = {
	title: string;
	onSelect: () => void;
	onRemove: () => void;
	onEditTitle: (title: string) => void;
	isCurrent: boolean;
};

const Note = ({
	title,
	onSelect,
	onRemove,
	onEditTitle,
	isCurrent
}: NoteProps) => {
	return (
		<Box
			onClick={onSelect}
			className={`p-4 border-2 rounded-lg hover:bg-slate-100 hover:border-purple-600 hover:cursor-pointer ${
				isCurrent ? 'bg-slate-100 border-purple-600' : ''
			}`}
		>
			<Flex className="w-full" align={'center'} justify={'between'}>
				<Text className="w-40 line-clamp-1">{title}</Text>
				<Flex gap={'2'}>
					<EditDialogButton
						initialTitle={title}
						editNote={onEditTitle}
					/>
					<RemoveDialogButton removeNote={onRemove} />
				</Flex>
			</Flex>
		</Box>
	);
};

export default Note;
