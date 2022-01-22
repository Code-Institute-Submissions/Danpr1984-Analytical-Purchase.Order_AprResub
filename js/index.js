
let start = document.getElementById("start");

let dishes = document.getElementById("guests-number");

let createdBy = document.getElementById("created-by");

let operand1Shrimp = document.getElementById('operand1-shrimp');

let operand1Snapper = document.getElementById('operand1-snapper');

let operand1Seabass = document.getElementById('operand1-seabass');

let operand1Chicken = document.getElementById('operand1-chicken');

let operand1Ribeye = document.getElementById('operand1-ribeye');



function Continue() {

    let start = document.getElementById("start-date").value;
    let end = document.getElementById("end-date").value;
    let dishes = document.getElementById("guests-number").value;
    let createdBy = document.getElementById("created-by").value;
    let operand1Shrimp = document.getElementById('operand1-shrimp').value;
    let operand1Snapper = document.getElementById('operand1-redsnapper').value;
    let operand1Seabass = document.getElementById('operand1-seabass').value;
    let operand1Chicken = document.getElementById('operand1-chicken').value;
    let operand1Ribeye = document.getElementById('operand1-ribeye').value;

    let shoppingList = [start, end, dishes, createdBy, operand1Shrimp, operand1Snapper, operand1Seabass, operand1Chicken, operand1Ribeye ];
window.location = '../order.html?shoppingList=' + shoppingList;
}


