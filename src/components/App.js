import React, { Component } from 'react';
import StopWatch from './StapWatch';

export default class App extends Component {
	render() {
		return (
			<div style={styles.container}>
				<h2 style={styles.header}>타이머</h2>
				<StopWatch />
			</div>
		);
	}
}

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column'
	},
	header: {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: '#ccc',
		margin: 0,
		padding: '10px 0'
	}
};
