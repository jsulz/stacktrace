const React = require('react');
const api = require('../utilities/api');

const Answers = ( props ) => {
	console.log( props)
	return (
		<ul className='answers'>
			{ props.answers.map( answer => {
				return <li 
						key={answer.question_id} className='answers-item'>
						<a href={answer.link} target='_blank' className='answers-title'>{answer.title}</a>
						<ul className='answer-owner'>
							<li className='answer-owner-avatar'>
								<img src={answer.owner.profile_image} />
							</li>
							<li className='answer-owner-accept-rate'>
								{answer.owner.accept_rate ? answer.owner.accept_rate : 'No Accept Rate' }
							</li>
							<li className='answer-owner-name'>
								<a href={answer.owner.link} target='_blank'>{answer.owner.display_name}</a>
							</li>
						</ul>
					</li>
			})}
		</ul>
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
						answers: response
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