import React from 'react';
import { Header, Segment, Button, Image, List } from 'semantic-ui-react';

import './App.css';
import axios from 'axios';

function App() {
	return (
		<div>
			<Header as="h3" block>
				IraqiDev
			</Header>
			<List divided verticalAlign="left">
				<List.Item>
					<List.Content floated="right">
						<Button>Add</Button>
					</List.Content>
					<Image avatar src="/images/avatar/small/lena.png" />
					<List.Content>Lena</List.Content>
				</List.Item>
				<List.Item>
					<List.Content floated="right">
						<Button>Add</Button>
					</List.Content>
					<Image avatar src="/images/avatar/small/lindsay.png" />
					<List.Content>Lindsay</List.Content>
				</List.Item>
				<List.Item>
					<List.Content floated="right">
						<Button>Add</Button>
					</List.Content>
					<Image avatar src="/images/avatar/small/mark.png" />
					<List.Content>Mark</List.Content>
				</List.Item>
				<List.Item>
					<List.Content floated="right">
						<Button>Add</Button>
					</List.Content>
					<Image avatar src="/images/avatar/small/molly.png" />
					<List.Content>Molly</List.Content>
				</List.Item>
			</List>
		</div>
	);
}

export default App;
