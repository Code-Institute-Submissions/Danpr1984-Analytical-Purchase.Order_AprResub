/*jshint esversion: 6 */
/**
 * This function picks up the values from the calculate.html so they can be used to make operations 
 * with JavaScript files that will reflect in the forms in the order.html file
 */

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

    let shoppingList = [start, end, dishes, createdBy, operand1Shrimp, operand1Snapper, operand1Seabass, operand1Chicken, operand1Ribeye];
    console.log(shoppingList);
    setTimeout(function () {
        window.location = 'order.html?shoppingList=' + shoppingList;
    });

}

function checkForm(e) {
    e.preventDefault();
    let start = document.getElementById("start-date");
    let end = document.getElementById("end-date");
    let dishes = document.getElementById("guests-number");
    let createdBy = document.getElementById("created-by");
    let operand1Shrimp = document.getElementById('operand1-shrimp');
    let operand1Snapper = document.getElementById('operand1-redsnapper');
    let operand1Seabass = document.getElementById('operand1-seabass');
    let operand1Chicken = document.getElementById('operand1-chicken');
    let operand1Ribeye = document.getElementById('operand1-ribeye');
    let errorSpan = document.createElement('span');
    let form = [start, end, dishes, createdBy, operand1Shrimp, operand1Snapper, operand1Seabass, operand1Chicken, operand1Ribeye];
    let counter = 0;
    for (let field of form) {
        if (field.value && field.checkValidity()) {
            counter++;
        } else {
            if (!field.value)  {
                field.parentElement.insertBefore(errorSpan, field.nextSibling);
                field.parentElement.lastElementChild.setAttribute('class', 'form-error-message');
                field.parentElement.lastElementChild.innerText ='*Required';
            }
        }

    }
    if (counter == form.length) {
        Continue();
    } else {
        window.scrollTo(0, 0);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("continue").addEventListener('click', checkForm);
    setTimeout(function () {
        document.getElementById("load-content").style.visibility = "visible";
    }, 2500);
});