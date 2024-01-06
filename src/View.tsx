import { Button, Container, Flex } from '@radix-ui/themes';

function View() {
	return (
		<Flex direction={'column'}>
			<Container>
				<Button>New</Button>
			</Container>
			<Flex></Flex>
		</Flex>
	);
}

export default View;
