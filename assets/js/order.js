/*jshint esversion: 6 */

const shrimp = {
    share: 0.3,  
    weight: 6,  
    unitCost: 5 
};

const snapper = {
    share: 0.2, 
    weight: 20, 
    unitCost: 4 
};

const seabass = {
    share: 0.2, 
    weight: 6, 
    unitCost: 4 
};

const chicken = {
    share: 0.2, 
    weight: 8,
    unitCost: 4
};

const ribeye = {
    share: 0.1, 
    weight: 8, 
    unitCost: 4 
};

let pound = 16; //ounces in a pound

/**
 * This function should execute all the operations and show results automatically on the table in the order.html file
 */

window.onload = function() {

  
    let params = new URLSearchParams(location.search);
    let URL = params.get('shoppingList');
    

    let shoppingList = URL.split(',');
    
    
    document.getElementById("start-date2").value = shoppingList[0];
    document.getElementById("end-date2").value = shoppingList[1];
    document.getElementById("guests-numberp2").value = shoppingList[2];
    document.getElementById("created-byp2").value = shoppingList[3];
    let dishes = shoppingList[2];

    multiplyShareDishes(dishes);
    amountDish();
    needAmount();
    unitCost();
    onHand();
    totalOrder();
    totalCost();
    totalOrderCost();

/**
 * This function will connect the values in the on hand column from the calculate.html in order 
 * to preform operations in the table from the order html
 */

 function onHand() {
    document.getElementById('operand2-shrimp').value = shoppingList[4];
    document.getElementById('operand2-redsnapper').value = shoppingList[5];
    document.getElementById('operand2-seabass').value = shoppingList[6];
    document.getElementById('operand2-chicken').value = shoppingList[7];
    document.getElementById('operand2-ribeye').value = shoppingList[8];

}

/**
 * This function multiplies the amount of dishes expected to be sold with the sales share (set in the objects) per product
 */
function multiplyShareDishes(dishes) {

    let operand3Shrimp = shrimp.share * dishes;
    document.getElementById("operand3-shrimp").value = operand3Shrimp;

    let operand3Snapper = snapper.share * dishes;
    document.getElementById("operand3-redsnapper").value = operand3Snapper;


    let operand3Seabass = seabass.share * dishes;
    document.getElementById("operand3-seabass").value = operand3Seabass;

    let operand3Chicken = chicken.share * dishes;
    document.getElementById('operand3-chicken').value = operand3Chicken;

    let operand3Ribeye = ribeye.share * dishes;
    document.getElementById('operand3-ribeye').value = operand3Ribeye;

}
/**
 * This function brings the amount per ounces in each dish recipe to the table
 **/

function amountDish() {
    document.getElementById("operand4-shrimp").value = shrimp.weight;
    document.getElementById("operand4-redsnapper").value = snapper.weight;
    document.getElementById("operand4-seabass").value = seabass.weight;
    document.getElementById("operand4-chicken").value = chicken.weight;
    document.getElementById("operand4-ribeye").value = ribeye.weight;

}

/**
 * This function should multiply the total amount of dishes expected to be sold per product 
 * with the amount of product contained in each dish, divided by 16 which is the amount of ounces in a pound
 */
function needAmount() {

    let operand5Shrimp = document.getElementById("operand3-shrimp").value;
    operand5Shrimp *= shrimp.weight/pound;
    document.getElementById("operand5-shrimp").value = operand5Shrimp;

    let operand5Snapper = document.getElementById("operand3-redsnapper").value;
    operand5Snapper *= snapper.weight/pound;
    document.getElementById("operand5-redsnapper").value = operand5Snapper;

    let operand5Seabass = document.getElementById("operand3-seabass").value;
    operand5Seabass *= seabass.weight/pound;
    document.getElementById("operand5-seabass").value = operand5Seabass;

    let operand5Chicken = document.getElementById("operand3-chicken").value;
    operand5Chicken *= chicken.weight/pound;
    document.getElementById("operand5-chicken").value = operand5Chicken;

    let operand5Ribeye = document.getElementById("operand3-ribeye").value;
    operand5Ribeye *= ribeye.weight/pound;
    document.getElementById("operand5-ribeye").value = operand5Ribeye;
    
}

/**
 *This function should substract the products on hand from the total amount of product needed to get the final order amount
 * */

function totalOrder() {

    let operand6Shrimp = document.getElementById("operand5-shrimp").value;
    operand6Shrimp -= document.getElementById("operand2-shrimp").value;
    document.getElementById("operand6-shrimp").value = operand6Shrimp;

    let operand6Snapper = document.getElementById("operand5-redsnapper").value;
    operand6Snapper -= document.getElementById("operand2-redsnapper").value;
    document.getElementById("operand6-redsnapper").value = operand6Snapper;

    let operand6Seabass = document.getElementById("operand5-seabass").value;
    operand6Seabass -= document.getElementById("operand2-seabass").value;
    document.getElementById("operand6-seabass").value = operand6Seabass;

    let operand6Chicken = document.getElementById('operand5-chicken').value;
    operand6Chicken -= document.getElementById("operand2-chicken").value;
    document.getElementById("operand6-chicken").value = operand6Chicken;

    let operand6Ribeye = document.getElementById('operand5-ribeye').value;
    operand6Ribeye -= document.getElementById("operand2-ribeye").value;
    document.getElementById("operand6-ribeye").value = operand6Ribeye;

}

/**
 * This function will bring the unit cost of each product to the table. The unit cost of each product are in the objects
*/

function unitCost() {

    document.getElementById("operand7-shrimp").value = shrimp.unitCost;
    document.getElementById("operand7-redsnapper").value = snapper.unitCost;
    document.getElementById("operand7-seabass").value = seabass.unitCost;
    document.getElementById("operand7-chicken").value = chicken.unitCost;
    document.getElementById("operand7-ribeye").value = ribeye.unitCost;
}


/** 
 *This function multiplies the result of the needed amount to be ordered by the unit cost of each product to give us a total amount  
*/

function totalCost() {

    let operand7Shrimp = document.getElementById("operand6-shrimp").value;
    operand7Shrimp *= shrimp.unitCost;
    document.getElementById("operand8-shrimp").value = operand7Shrimp;

    let operand7Snapper = document.getElementById("operand6-redsnapper").value;
    operand7Snapper *= snapper.unitCost;
    document.getElementById("operand8-redsnapper").value = operand7Snapper;

    let operand7Seabass = document.getElementById("operand6-seabass").value;
    operand7Seabass *= seabass.unitCost;
    document.getElementById("operand8-seabass").value = operand7Seabass;

    let operand7Chicken = document.getElementById('operand6-chicken').value;
    operand7Chicken *= seabass.unitCost;
    document.getElementById("operand8-chicken").value = operand7Chicken;

    let operand7Ribeye = document.getElementById('operand6-ribeye').value;
    operand7Ribeye *= seabass.unitCost;
    document.getElementById("operand8-ribeye").value = operand7Ribeye;

}

/**
 * This functions adds the result of total cost of each product to give us a total amount $ for the order
 */

function totalOrderCost() {
    let totalAmount = parseInt(document.getElementById("operand8-shrimp").value) + parseInt(document.getElementById("operand8-redsnapper").value) + parseInt(document.getElementById("operand8-seabass").value) + parseInt(document.getElementById("operand8-chicken").value) + parseInt(document.getElementById("operand8-ribeye").value);
    document.getElementById("total-amount").value = totalAmount;
}};
