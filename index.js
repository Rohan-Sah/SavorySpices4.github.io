
const options = {method: 'GET'};

fetch('https://www.dev.readychatai.com/messages_json', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
