import { Card, Text, Flex } from '@radix-ui/themes';
import RemoveDialogButton from './RemoveDialogButton';
import EditDialogButton from './EditDialogButon';
type NoteProps = {
	title: string;
	onSelect: () => void;
	onRemove: () => void;
	onEditTitle: (title: string) => void;
	isCurrent: boolean;
};

const Note = ({ title, onSelect, onRemove, onEditTitle }: NoteProps) => {
	return (
		<Card onClick={onSelect} size="2" color="red">
			<Flex className="w-44" align={'center'} justify={'between'}>
				<Text className="w-40 line-clamp-1">{title}</Text>
				<Flex gap={'2'}>
					<EditDialogButton editNote={onEditTitle} />
					<RemoveDialogButton removeNote={onRemove} />
				</Flex>
			</Flex>
		</Card>
	);
};

export default Note;
