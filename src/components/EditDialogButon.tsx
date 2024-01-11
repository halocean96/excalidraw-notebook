import { Button, Dialog, Flex, IconButton, TextField } from '@radix-ui/themes';
import { Pencil2Icon } from '@radix-ui/react-icons';
import { useRef } from 'react';

type EditDialogButtonProps = {
	initialTitle: string;
	editNote: (title: string) => void;
};

const EditDialogButton = ({
	initialTitle,
	editNote
}: EditDialogButtonProps) => {
	const newTitleInputRef = useRef<HTMLInputElement>(null);
	const handleEditNote = () => {
		if (newTitleInputRef.current && newTitleInputRef.current.value) {
			editNote(newTitleInputRef.current.value);
		}
	};
	return (
		<Dialog.Root>
			<Dialog.Trigger>
				<IconButton variant="outline">
					<Pencil2Icon />
				</IconButton>
			</Dialog.Trigger>

			<Dialog.Content style={{ maxWidth: 450 }}>
				<Dialog.Title>
					변경할 제목을 입력해주세요<div className=""></div>
				</Dialog.Title>

				<Flex direction="column" gap="3">
					<TextField.Input
						ref={newTitleInputRef}
						defaultValue={initialTitle}
						placeholder="공백을 제외하고 입력해주세요."
					/>
				</Flex>

				<Flex gap="3" mt="4" justify="end">
					<Dialog.Close>
						<Button variant="outline" color="gray">
							취소
						</Button>
					</Dialog.Close>
					<Dialog.Close>
						<Button onClick={handleEditNote} variant="outline">
							수정
						</Button>
					</Dialog.Close>
				</Flex>
			</Dialog.Content>
		</Dialog.Root>
	);
};

export default EditDialogButton;
