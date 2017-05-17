const React = require('react');
const api = require('../utilities/api');

class Input extends React.Component{

	constructor( props ) {

		super( props );

		this.state = {
			term: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit( event ) {

		event.preventDefault();

		this.setState( () => {
			return {
				term: 'stuff'
			}
		});

		api.searchStack( 'https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=css&site=stackoverflow' );

		console.log( 'hello' );

	}

	render() {
		return(
			<form className="search-form" onSubmit={this.handleSubmit}>
				<label>Search Stackoverflow</label>
				<input type="search" />
				<button type="submit">Search</button>
			</form>
		)
	}

}

module.exports = Input;