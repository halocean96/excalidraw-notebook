import { Button, Dialog, Flex, TextField } from '@radix-ui/themes';
import { useRef } from 'react';

type CreateDialogButtonProps = {
	createNote: (title: string) => void;
};

const CreateDialogButton = ({ createNote }: CreateDialogButtonProps) => {
	const newTitleInputRef = useRef<HTMLInputElement>(null);
	const handleCreateNote = () => {
		if (newTitleInputRef.current && newTitleInputRef.current.value) {
			createNote(newTitleInputRef.current.value);
		}
	};
	return (
		<Dialog.Root>
			<Dialog.Trigger>
				<Button className="w-full">New</Button>
			</Dialog.Trigger>

			<Dialog.Content style={{ maxWidth: 450 }}>
				<Dialog.Title>
					제목을 입력해주세요<div className=""></div>
				</Dialog.Title>

				<Flex direction="column" gap="3">
					<TextField.Input
						ref={newTitleInputRef}
						defaultValue={'new'}
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
						<Button onClick={handleCreateNote} variant="outline">
							추가
						</Button>
					</Dialog.Close>
				</Flex>
			</Dialog.Content>
		</Dialog.Root>
	);
};

export default CreateDialogButton;
