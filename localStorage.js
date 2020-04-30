var output1 = document.getElementById('output1');
var output2 = document.getElementById('output2');

var templateObject = {
    "firstName": "Russ",
    "last": "Rapper",
    "age": 26
}

var tempString = JSON.stringify(templateObject);
// localStorage.setItem("test", tempString);

var tempObject = localStorage.getItem("test");
var Obj2 = JSON.parse(tempObject);

