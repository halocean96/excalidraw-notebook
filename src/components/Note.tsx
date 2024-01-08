import { Card, Text, Flex } from '@radix-ui/themes';
import RemoveDialogButton from './RemoveDialogButton';
type NoteProps = {
	title: string;
	onSelect: () => void;
	onRemove: () => void;
	isCurrent: boolean;
};

const Note = ({ title, onSelect, onRemove }: NoteProps) => {
	return (
		<Card onClick={onSelect} size="2" color="red">
			<Flex gap={'6'} align={'center'}>
				<Text>{title}</Text>
				<Flex>
					<RemoveDialogButton removeNote={onRemove} />
				</Flex>
			</Flex>
		</Card>
	);
};

export default Note;
