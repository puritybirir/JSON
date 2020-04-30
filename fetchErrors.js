const url = "https://randomuser.me/api/";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
