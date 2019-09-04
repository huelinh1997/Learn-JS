/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
var urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
  'https://jsonplaceholder.typicode.com/todos/5'
];

// Cách 1: Sử dụng vòng lặp for

// Cách 2: Sử dụng array.map
// Gợi ý: Có thể yield 1 array các Promise

var co = require('co');
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
var loadLink = co.wrap(function*(arr) {
  var value = yield arr.map((file) => load(file));
  return value;
});
loadLink(urls)
.then(function(value) {
  for(var i of value) {
     console.log(i.data); 
  }
})
.catch(function(err) {
   console.log(err);
 });