import { Card, Text } from '@radix-ui/themes';

type NoteProps = {
	title: string;
	onSelect: () => void;
	isCurrent: boolean;
};
const Note = ({ title, onSelect }: NoteProps) => {
	return (
		<Card onClick={onSelect} size="2" color="red">
			<Text>{title}</Text>
		</Card>
	);
};

export default Note;
