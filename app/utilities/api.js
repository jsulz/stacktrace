const axios = require('axios');

module.exports  ={

	searchStack( searchURL ) {

		//const searchURL = window.encodedURI( 'https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=' + terms + '&site=stackoverflow' );

		return axios.get( searchURL )
			.then( response => console.log( response ) );

	}

}