const url = "https://randomuser.me/api/"
var output = document.getElementById('output1');


fetch(url).then(function(rep){
    return rep.json();  
}).then(function(data){
    let person = data.results[0].name;
    output.innerHTML = person.first + " " + person.last;
    console.log(data, "?????");
})
