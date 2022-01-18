

/**
 * Getting all the elements on page one to be able to gather needed information to make calculations for page two
*/ 
function Continue() {
let date = document.getElementById("date").value;
let dishes = document.getElementById("guests-number").value;
let createdBy = document.getElementById("created-by").value;
let operand1Shrimp = document.getElementById('operand1-shrimp').value;
let operand1Snapper = document.getElementById('operand1-snapper').value;
let operand1Seabass = document.getElementById('operand1-seabass').value;
let operand1Chicken = document.getElementById('operand1-chicken').value;
let operand1Ribeye = document.getElementById('operand1-ribeye').value;

let shoppingList = [date, dishes, createdBy, operand1Shrimp, operand1Snapper, operand1Seabass, operand1Chicken, operand1Ribeye];

window.location = '../order.html?shoppingList=' + shoppingList;


}



/** 
 * 
let date = document.getElementById("date")
date.addEventListener('change', function (e) {
    console.log(this.value);
});

let dishes = document.getElementById("guests-number")
dishes.addEventListener('change', function (e) {
    console.log(parseInt(this.value));
});

let createdBy = document.getElementById("created-by")
createdBy.addEventListener('change', function (e) {
    console.log(this.value);
});

let operand1Shrimp = document.getElementById('operand1-shrimp');
operand1Shrimp.addEventListener('change', function (e) {
    console.log(parseInt(this.value));
});



let operand1Snapper = document.getElementById('operand1-snapper');
operand1Snapper.addEventListener('change', function (e) {
    console.log(parseInt(this.value));
});


let operand1Seabass = document.getElementById('operand1-seabass');
operand1Seabass.addEventListener('change', function (e) {
    console.log(parseInt(this.value));
});



let operand1Chicken = document.getElementById('operand1-chicken');
operand1Chicken.addEventListener('change', function (e) {
    console.log(parseInt(this.value));
})



let operand1Ribeye = document.getElementById('operand1-ribeye');
operand1Ribeye.addEventListener('change', function (e) {
    console.log(parseInt(this.value));
})

*/