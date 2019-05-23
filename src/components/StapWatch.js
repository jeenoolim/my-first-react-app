import React, { Component } from 'react';

import moment from 'moment';

export default class Stopwatch extends Component {
	format = value => {
		return moment.utc(value).format('mm:ss:SS');
	};

	state = {
		status: false,
		time: 0
	};

	setTime = () => {
		let { time } = this.state;
		const start = Date.now() - time;
		this.timer = setInterval(() => {
			time = Date.now() - start;
			this.setState({ time });
		});
	};

	onClick = e => {
		const { status } = this.state;
		status ? clearInterval(this.timer) : this.setTime();
		this.setState({ status: !status });
	};

	onReset = e => {
		this.timer && clearInterval(this.timer);
		this.setState({ time: 0, status: false });
	};

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		const { status, time } = this.state;
		return (
			<div style={styles.container}>
				<div style={styles.time}>{this.format(time)}</div>
				<div>
					<button style={styles.button} onClick={this.onClick}>
						{status ? 'Stop' : 'Start'}
					</button>
					<button style={styles.button} onClick={this.onReset}>
						Reset
					</button>
				</div>
			</div>
		);
	}
}

const styles = {
	container: {
		fontSize: '30pt',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		color: '#fff'
	},
	time: {
		fontSize: '50pt',
		textAlign: 'center',
		backgroundColor: '#000',
		width: '100%',
		padding: '20px'
	},
	button: {
		backgroundColor: '#fff',
		padding: '4px',
		margin: '4px'
	}
};
