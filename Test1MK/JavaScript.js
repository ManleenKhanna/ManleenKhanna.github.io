var flight = document.getElementById("flight");
var hotel = document.getElementById("hotel");
var snorkeling = document.getElementById("snorkeling");
var helicopter = document.getElementById("helicopter");
var massage = document.getElementById("massage");
var vip = document.getElementById("ten");

function calculate() {
    var flight = document.getElementById("flight");
    var hotel = document.getElementById("hotel");
    var snorkeling = document.getElementById("snorkeling");
    var helicopter = document.getElementById("helicopter");
    var massage = document.getElementById("massage");
    var tip = document.getElementById("ten");
    var sum = 0;
    if (flight.checked) {
        sum += 199.99;
    }
    if (hotel.checked) {
        sum += 399.99;
    }
    if (snorkeling.checked) {
        sum += 79.99;
    }
    if (helicopter.checked) {
        sum += 99.99;
    }
    if (massage.checked) {
        sum += 59.99;
    }
    var quantity = document.getElementById("quantity").value;
    if ((quantity == "") || isNaN(quantity)) {
        quantity = 0;
    } else {
        quantity = parseInt(quantity);
        sum = sum * quantity;
    }
    if (tip.checked) {
        sum *= 1.1;
    }
    
    document.getElementById("price").innerHTML = " " + sum.toFixed(2) + "CAD";
}