var obj = {
    "car":["blue", "black"]
};

var obj2 = {
    "car1":{"color":"blue"},
    "car2":{"color":"black"},
}

var obj3 = {
    "car1":{
        "color":"blue",
        "model":"Mustang"
    },
    "car2":{
        "color":"black",
        "model":"Honda"
    },
};


var obj4 = {
    "cars": [
        {
            "color":"blue",
            "model":"Mustang"
        },
        {
            "color":"black",
            "model":"Honda"
        }
    ]
}
console.log(obj.car[1]);
console.log(obj2);
console.log(obj3);