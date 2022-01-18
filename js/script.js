const shrimp = {
    share: 0.3,
    weight: 0.33,
    unitCost: 5
};

const snapper = {
    share: 0.2,
    weight: 0.33,
    unitCost: 4
};

const seabass = {
    hare: 0.2,
    weight: 0.33,
    unitCost: 4
};

const chicken = {
    hare: 0.2,
    weight: 0.33,
    unitCost: 4
};

const ribeye = {
    share: 0.1,
    weight: 0.5,
    unitCost: 4
};

/**
 * Getting all the elements on page one to be able to gather needed information to make calculations for page two
 */

let date = document.getElementById("date")
date.addEventListener('change', function (e) {
    console.log(this.value);
})

let dishes = document.getElementById("guests-number")
dishes.addEventListener('change', function (e) {
    console.log(parseInt(this.value));
})

let createdBy = document.getElementById("created-by")
createdBy.addEventListener('change', function (e) {
    console.log(this.value);
})

let operand1Shrimp = document.getElementById('operand1-shrimp');
operand1Shrimp.addEventListener('change', function (e) {
    console.log(parseInt(this.value));
})



let operand1Snapper = document.getElementById('operand1-snapper');
operand1Snapper.addEventListener('change', function (e) {
    console.log(parseInt(this.value));
})


let operand1Seabass = document.getElementById('operand1-seabass');
operand1Seabass.addEventListener('change', function (e) {
    console.log(parseInt(this.value));
})



let operand1Chicken = document.getElementById('operand1-chicken');
operand1Chicken.addEventListener('change', function (e) {
    console.log(parseInt(this.value));
})



let operand1Ribeye = document.getElementById('operand1-ribeye');
operand1Ribeye.addEventListener('change', function (e) {
    console.log(parseInt(this.value));
})



function contentLoad() {
    let date = document.getElementById("datep2")
    let dishes = document.getElementById("guests-numberp2")
    let createdBy = document.getElementById("created-byp2")
    let operand2Shrimp = document.getElementById("operand2-shrimp");
    let operand2Snapper = document.getElementById("operand2-snapper");
    let operand2Seabass = document.getElementById("operand2-seabass");
    let operand2Chicken = document.getElementById('operand2-chicken');
    let operand2Ribeye = document.getElementById('operand2-ribeye');
}



/**
 * This function should execute all the operations and show results in chart
 */
function runCalculations() {
    let myButton = document.getElementById("continue")
    myButton.addEventListener("click", function (e) {})
}


/**
 * This function should divide the total amount of dishes expected to be sold with the sells share of each dish
 */
function calculateDishesByProduct() {

}


/**
 * This function should multiply the total amount of dishes expected to be sold per product with the amount of product contained in each dish
 */

function productAmount() {
    let operand3Shrimp = document.getElementById("operand3-shrimp");
    let operand3Snapper = document.getElementById("operand3-snapper");
    let operand3Seabass = document.getElementById("operand3-seabass");
    let operand3Chicken = document.getElementById('operand3-chicken');
    let operand3Ribeye = document.getElementById('operand3-ribeye');

    operand3Shrimp = shrimp.weight;
    operand3Snapper = snapper.weight;
    operand23Seabass = seabass.weight;
    operand3Chicken = chicken.weight;
    operand3Ribeye = ribeye.weight;


    let operand4Shrimp = document.getElementById("operand4-shrimp");
    let operand4Snapper = document.getElementById("operand4-snapper");
    let operand4Seabass = document.getElementById("operand4-seabass");
    let operand4Chicken = document.getElementById('operand4-chicken');
    let operand4Ribeye = document.getElementById('operand4-ribeye');
}

/**
 * This function should substract the product on stock from the total amount of product needed and multiply the result by the unit cost of each product */
function calculateOrder() {
    let operand5Shrimp = document.getElementById("operand5-shrimp");
    let operand5Snapper = document.getElementById("operand5-snapper");
    let operand5Seabass = document.getElementById("operand5-seabass");
    let operand5Chicken = document.getElementById('operand5-chicken');
    let operand5Ribeye = document.getElementById('operand5-ribeye');


}