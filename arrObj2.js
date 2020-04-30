var output1 = document.getElementById('output1');
var output2 = document.getElementById('output2');

var obj = {
    "people": [
        {
            "firstName": "Lawrence",
            "last": "Svekis",
            "age": 30
        },
        {
            "firstName": "Purity",
            "last": "Birir",
            "age": 24
        },
        {
            "firstName": "Sho",
            "last": "Madjozi",
            "age": 25
        },
        {
            "firstName": "Shadrack",
            "last": "Lilan",
            "age": 23
        }
    ],
    "places": [
        {
            "location": "Toronto",
            "latitude": 70,
        },
        {
            "location": "New York",
            "latitude": 80,
        },
    ]
}

var templateObject = {
    "firstName": "Russ",
    "last": "Rapper",
    "age": 26
}

obj.people.push(templateObject);



var i;
for (i = 0; i < obj.people.length; i++) {
    var person = obj.people[i];
    output1.innerHTML += person.firstName + " " + person.last + "<br>";
}


for (var x = 0; x < obj.places.length; x++) {
    var place = obj.places[x];
    output2.innerHTML += place.location + " " + place.latitude + "<br>";
}

