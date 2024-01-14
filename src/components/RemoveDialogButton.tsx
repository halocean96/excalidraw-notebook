import { AlertDialog, Button, Flex, IconButton } from '@radix-ui/themes';
import { TrashIcon } from '@radix-ui/react-icons';

type RemoveDialogButtonProps = {
	removeNote: () => void;
};

const RemoveDialogButton = ({ removeNote }: RemoveDialogButtonProps) => {
	return (
		<AlertDialog.Root>
			<AlertDialog.Trigger>
				<IconButton
					className="hover:cursor-pointer"
					variant="outline"
					color="red"
					size={'2'}
				>
					<TrashIcon />
				</IconButton>
			</AlertDialog.Trigger>
			<AlertDialog.Content>
				<AlertDialog.Title>정말로 삭제하시겠습니까?</AlertDialog.Title>
				<AlertDialog.Description>
					삭제된 노트는 복구할 수 없습니다.
				</AlertDialog.Description>
				<Flex justify={'end'} gap={'4'}>
					<AlertDialog.Cancel>
						<Button variant="soft" color="gray">
							취소
						</Button>
					</AlertDialog.Cancel>
					<AlertDialog.Action>
						<Button
							autoFocus
							variant="soft"
							color="red"
							onClick={removeNote}
						>
							삭제
						</Button>
					</AlertDialog.Action>
				</Flex>
			</AlertDialog.Content>
		</AlertDialog.Root>
	);
};

export default RemoveDialogButton;
