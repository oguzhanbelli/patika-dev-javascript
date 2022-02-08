fetch("data/settings.json")
  .then((response) => {
    if (response.status == 200) {
      return response.json();
    }
  })
  .then((responseJSON) => {
    console.log(responseJSON);
  });

let userListDOM = document.querySelector("#userList");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((responseJSON) => {
    responseJSON.forEach((item) => {
      let liDOM = document.createElement("li");
      liDOM.innerHTML = item.title;
      userListDOM.appendChild(liDOM);
    });
  });
