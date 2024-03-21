
const options = {method: 'GET'};

fetch('https://www.dev.readychatai.com/messages_json', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


// const options = {method: 'GET'};
// const options = {
// 	method: 'GET',
// 	headers: {
	
// 	}
// };

// https://www.dev.readychatai.com/messages_json

// fetch('https://www.dev.readychatai.com/messages_json', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
// const data=fetch('https://www.dev.readychatai.com/messages_json');
// console.log(data);


//   https://www.dev.readychatai.com/messages_json


// fetch('https://www.dev.readychatai.com/messages_json', options)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(response => console.log(response))
//   .catch(err => console.error('Fetch error:', err));