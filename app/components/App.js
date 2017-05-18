const React = require('react');
const Input = require('./Input');

class App extends React.Component{

	render() {
		return(
			<div className='search'>
				<Input />
			</div>
		)
	}

}

module.exports = App;