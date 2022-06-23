document.getElementById('Text').addEventListener('click', getText);
document.getElementById('Users').addEventListener('click', getUsers);
document.getElementById('API').addEventListener('click', getPosts);
document.getElementById('Comments').addEventListener('click', getComments);

function getText() {
     fetch('sample.txt')
     .then((res) => res.text()) 
     .then((data) => {
      document.getElementById('line').innerHTML = data;
      })     
      .catch((err) => console.log(err))
    }

  function getUsers(){
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
     let output = '<h2>Users</h2>';
     data.forEach(function(user){
        output += `
        <ul>
          <li>ID: ${user.id}</li>
          <li>Name: ${user.name}</li>
          <li>Email ${user.email}</li>
      </ul>`
     });
      document.getElementById('line').innerHTML = output;
    })
  }

  function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
     let output = '<h2>Posts</h2>';
     data.forEach(function(post){
        output += `
        <div>
          <h3>${post.title}</h3>
          <p>${post.body}
        </div>
        `
     });
      document.getElementById('line').innerHTML = output;
    })
  }

  function getComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then((res) => res.json())
    .then((data) => {
     let output = '<h2>Comments</h2>';
     data.forEach(function(post){
        output += `
        <div>
          <h3>${post.title}</h3>
          <p>${post.body}
        </div>
        `
     });
      document.getElementById('line').innerHTML = output;
    })
  }