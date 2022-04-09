import * as DOM from './dom.js'

// InputResponse 

const inputResponse =  {
  method: 'GET',
  url: 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf',
  headers: {
    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
    'X-RapidAPI-Key': '8ec644b043mshf47b00644918a34p1a468ajsn715ecda9c057'
  }
};

axios.request(inputResponse).then(response => {
	console.log(response.data);
    DOM.inputResponse. = response.data.word;
}).catch(function (error) {
	console.error(error);
});



