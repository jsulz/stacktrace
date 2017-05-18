const React = require('react');
const api = require('../utilities/api');

const Answers = ( props ) => {
	console.log( props );

	return (
		<div>Hello!!!</div>
	)
}

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
				term: value,
				answers: null
			}
		})

	}

	handleSubmit( event ) {

		event.preventDefault();

		api.searchStack( this.state.term )
			.then( response => {
				this.setState( () =>{
					return{
						answers: response.data.items
					}
				})
			})

	}

	render() {
		return(
			<div>
				<form className="search-form" onSubmit={this.handleSubmit}>
					<label>Search Stackoverflow</label>
					<input type="search" onChange={this.handleChange}/>
					<button type="submit">Search</button>
				</form>
				{ !this.state.answers ? <div>Answers will be here</div> : <Answers answers={this.state.answers}/>}
			</div>
		)
	}

}

module.exports = Input;