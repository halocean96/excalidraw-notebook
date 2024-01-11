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

const Note = ({
	title,
	onSelect,
	onRemove,
	onEditTitle,
	isCurrent
}: NoteProps) => {
	return (
		// FIXME:  isCurrent ? 'border-purple-900' : '' 스타일 적용 안됨
		<Card
			onClick={onSelect}
			className={`border-2 hover:border-purple-600 hover:cursor-pointer ${
				isCurrent ? 'border-purple-900' : ''
			}`}
		>
			<Flex className="w-44" align={'center'} justify={'between'}>
				<Text className="w-40 line-clamp-1">{title}</Text>
				<Flex gap={'2'}>
					<EditDialogButton
						initialTitle={title}
						editNote={onEditTitle}
					/>
					<RemoveDialogButton removeNote={onRemove} />
				</Flex>
			</Flex>
		</Card>
	);
};

export default Note;
