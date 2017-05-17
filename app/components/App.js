const React = require('react');
const Input = require('./Input');

class App extends React.Component{

	render() {
		return(
			<div>
				<Input />
				<div>Hello!</div>
			</div>
		)
	}

}

module.exports = App;