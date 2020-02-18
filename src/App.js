import React from 'react';
import { Header } from 'semantic-ui-react';
import { ContentLayout } from './blog/components/layouts/ContentLayout'

import './App.css';

function App() {
	return (
		<>
			<Header as="h3" block>
				IraqiDev
			</Header>
			<ContentLayout />
		</>
	);
}

export default App;
