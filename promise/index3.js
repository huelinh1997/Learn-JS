var axios = require('axios');
function load(link) {
  return new Promise(function(resolve, reject) {
    axios.get(link)
     .then(function(respone) {
       resolve(respone);
     })
     .catch(function(err) {
       reject(err);
     })
  });
}
load('https://jsonplaceholder.typicode.com/todos/1')
 .then(function(value) {
   console.log(value.data);
 })
 .catch(function(err) {
   console.log(err);
 });