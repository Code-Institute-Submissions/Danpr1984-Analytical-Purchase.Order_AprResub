/*jshint esversion: 6 */
/**
 * This function picks up the values from the calculate.html so they can be used to make operations with JavaScript files that will reflect in the forms in the order.html file
 */

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(function () {
        document.getElementById("load-content").style.visibility = "visible";
    }, 2500);
})


let myButton = document.getElementById("continue");
myButton.addEventListener("click", function Continue() {

    const start = document.getElementById("start-date").value;
    const end = document.getElementById("end-date").value;
    const dishes = document.getElementById("guests-number").value;
    const createdBy = document.getElementById("created-by").value;
    const operand1Shrimp = document.getElementById('operand1-shrimp').value;
    const operand1Snapper = document.getElementById('operand1-redsnapper').value;
    const operand1Seabass = document.getElementById('operand1-seabass').value;
    const operand1Chicken = document.getElementById('operand1-chicken').value;
    const operand1Ribeye = document.getElementById('operand1-ribeye').value;



    const shoppingList = [start, end, dishes, createdBy, operand1Shrimp, operand1Snapper, operand1Seabass, operand1Chicken, operand1Ribeye];
    window.location = '../order.html?shoppingList=' + shoppingList;


});