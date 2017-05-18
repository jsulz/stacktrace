const React = require('react');
const api = require('../utilities/api');

class Input extends React.Component{

	constructor( props ) {

		super( props );

		this.state = {
			term: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange( event ) {

		const value = event.target.value;

		this.setState( () => {
			return {
				term: value
			}
		})

	}

	handleSubmit( event ) {

		event.preventDefault();

		api.searchStack( this.state.term );

	}

	render() {
		return(
			<form className="search-form" onSubmit={this.handleSubmit}>
				<label>Search Stackoverflow</label>
				<input type="search" onChange={this.handleChange}/>
				<button type="submit">Search</button>
			</form>
		)
	}

}

module.exports = Input;