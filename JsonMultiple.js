const output = document.getElementById("output1");
const url = "https://randomuser.me/api/?results=5";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    data.results.forEach(function (person) {
      console.log(person.name.first);
      console.log(person.picture.thumbnail);
      output.innerHTML += person.name.first + " ";
      output.innerHTML += "<img src='" + person.picture.thumbnail + "'><br>";
    });
    console.log(data);
  });
