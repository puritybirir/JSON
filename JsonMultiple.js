const url = "https://randomuser.me/api/?result=5";
var output = document.getElementById('output1');

fetch(url).then(function(res){
    return res.json()
}).then(function(data){
    data.results.forEach(person => {
        console.log(person.name.first);
        console.log(person.picture.thumbnail);
        output1.innerHTML = person.name.first + " ";
        output1.innerHTML = "<img src="+person.picture.thumbnail+"'><br>";
    });
})

